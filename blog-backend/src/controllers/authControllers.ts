import bcrypt from "bcrypt";
import type { Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "../models/User";

// register a new user
export async function register(req: Request, res: Response) {
  try {
    const { name, email, password } = req.body as {
      name: string;
      email: string;
      password: string;
    };

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existing = await User.findOne({ email });

    if (existing) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, passwordHash });

    //   Payload and Scretkey
    const payload = {
      userId: user._id,
    };
    const secretKey = process.env.JWT_SECRET || ("your_secret_key" as string);

    const token = jwt.sign(payload, secretKey, {
      expiresIn: "3d",
    });

    return res
      .status(201)
      .json({ token, user: { id: String(user._id), name, email } });
  } catch (error) {
    return res.status(500).json({ message: "Requestion failed" });
  }
}
// login a user

export async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body as { email: string; password: string };

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are requires" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const payload = {
      userId: user._id,
    };
    const secretKey = process.env.JWT_SECRET || ("your_secret_key" as string);

    const token = jwt.sign(payload, secretKey, {
      expiresIn: "3d",
    });

    return res
      .status(201)
      .json({ token, user: { payload, name: user.name, email } });
  } catch (error) {
    return res.status(500).json({ message: "Login failed" });
  }
}

export default { register, login };
