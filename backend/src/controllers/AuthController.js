import { eq } from "drizzle-orm";
import db from "../config/db/index.js";
import { Users } from "../../db/User.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^\d{10,15}$/;

export const login = async (req, res) => {
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

    const token = jwt.sign(
      { userId: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).send({
      message: "Login successfully",
      token,
      role: user.role,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const register = async (req, res) => {
  try {
    const { identifier, password, fullName } = req.body;

    if (!EMAIL_REGEX.test(identifier) || !PHONE_REGEX.test(identifier)) {
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
