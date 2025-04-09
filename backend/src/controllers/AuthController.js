import { eq } from "drizzle-orm";
import db from "../config/db/index.js";
import { Users } from "../../db/User.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const userResult = await db
      .select()
      .from(Users)
      .where(eq(Users.username, username));

    const user = userResult[0];
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
    const { username, password } = req.body;

    const existingUser = await db
      .select()
      .from(Users)
      .where(eq(Users.username, username));

    if (existingUser.length > 0) {
      return res.status(400).send({ message: "User already exists" });
    }

    const hashedPassword = await bcryptjs.hash(password, 10);
    const newUser = {
      username,
      password: hashedPassword,
    };

    await db.insert(Users).values(newUser);

    res.status(201).send({
      message: "User created successfully",
      user: { username: newUser.username },
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
