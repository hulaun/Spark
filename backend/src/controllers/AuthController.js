import { eq } from "drizzle-orm";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

import db from "../config/db/index.js";
import { Users } from "../../db/User.js";
import { sendOTP } from "../service/MailService.js";
import { UserService } from "../service/UserService.js";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^\d{10,15}$/;

const login = async (req, res) => {
  try {
    const { identifier, password } = req.body;

    var user;

    if (EMAIL_REGEX.test(identifier)) {
      const userResult = await db
        .select()
        .from(Users)
        .where(eq(Users.email, identifier));

      user = userResult[0];
    }

    if (PHONE_REGEX.test(identifier)) {
      const userResult = await db
        .select()
        .from(Users)
        .where(eq(Users.phoneNumber, identifier));

      user = userResult[0];
    }

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    const isPasswordValid = await bcryptjs.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).send({ message: "Invalid password" });
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).send({
      message: "Login successfully",
      user: {
        id: user.id,
        username: identifier,
        fullName: user.fullName,
        email: user.email,
        phoneNumber: user.phoneNumber,
      },
      token,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const register = async (req, res) => {
  try {
    const { identifier, password, fullName } = req.body;

    if (!EMAIL_REGEX.test(identifier) && !PHONE_REGEX.test(identifier)) {
      return res.status(400).send({ message: "Invalid username" });
    }

    if (EMAIL_REGEX.test(identifier)) {
      const existingEmail = await db
        .select()
        .from(Users)
        .where(eq(Users.email, identifier));
      if (existingEmail.length > 0) {
        return res.status(400).send({ message: "Email already exists" });
      }

      const hashedPassword = await bcryptjs.hash(password, 10);

      const newUser = {
        email: identifier,
        password: hashedPassword,
        fullName,
      };
      await db.insert(Users).values(newUser);
    }
    if (PHONE_REGEX.test(identifier)) {
      const existingPhone = await db
        .select()
        .from(Users)
        .where(eq(Users.phoneNumber, identifier));
      if (existingPhone.length > 0) {
        return res.status(400).send({ message: "Phone number already exists" });
      }

      const hashedPassword = await bcryptjs.hash(password, 10);

      const newUser = {
        phoneNumber: identifier,
        password: hashedPassword,
        fullName,
      };
      await db.insert(Users).values(newUser);
    }

    res.status(201).send({
      message: "User created successfully",
      user: { username: identifier, fullName: fullName },
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const forgotPassword = async (req, res) => {
  try {
    const { identifier } = req.body;

    if (!EMAIL_REGEX.test(identifier) && !PHONE_REGEX.test(identifier)) {
      return res.status(400).send({ message: "Invalid username" });
    }

    if (EMAIL_REGEX.test(identifier)) {
      const userResult = await db
        .select()
        .from(Users)
        .where(eq(Users.email, identifier));

      if (userResult.length === 0) {
        return res.status(404).send({ message: "User not found" });
      }
    }

    if (PHONE_REGEX.test(identifier)) {
      const userResult = await db
        .select()
        .from(Users)
        .where(eq(Users.phoneNumber, identifier));

      if (userResult.length === 0) {
        return res.status(404).send({ message: "User not found" });
      }
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    await sendOTP(identifier, otp);

    const user = await UserService.getUserByEmail(identifier);

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    UserService.updateUser(user.id, {
      otp,
      otpExpires: new Date(Date.now() + 10 * 60 * 1000),
      isVerified: 0,
      isBlocked: 0,
    });

    res.status(200).send({ message: "OTP sent successfully" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const verifyOTP = async (req, res) => {
  try {
    const { identifier, otp } = req.body;

    const user = await UserService.getUserByEmail(identifier);

    if (user.otp !== otp) {
      return res.status(400).send({ message: "Invalid OTP" });
    }

    if (new Date() > user.otpExpires) {
      return res.status(400).send({ message: "OTP expired" });
    }

    if (user.isVerified) {
      return res.status(400).send({ message: "User already verified" });
    }

    await UserService.updateUser(user.id, { isVerified: 1 });

    res.status(200).send({ message: "OTP verified successfully" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const resetPassword = async (req, res) => {
  try {
    const { identifier, password } = req.body;

    const hashedPassword = await bcryptjs.hash(password, 10);

    await UserService.updateUser(identifier, { password: hashedPassword });

    res.status(200).send({ message: "Password reset successfully" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const AuthController = {
  login,
  register,
  forgotPassword,
  verifyOTP,
  resetPassword,
};
