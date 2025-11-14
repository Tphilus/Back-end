import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";
import { Request, Response, Router } from "express";
import jwt from "jsonwebtoken";
import { db } from "../../db/index";
import {
  createUserSchema,
  loginUserSchema,
  userTable,
} from "../../db/userSchema";
import { validateData } from "../../middleware/validationMiddleware";

const router = Router();

router.post(
  "/register",
  validateData(createUserSchema),
  async (req: Request, res: Response) => {
    try {
      const data = req.cleanBody;
      // const hashedPassword = await bcrypt.hash(data.password, 10);
      //   const [user] = await db.insert(userTable).values({...data, password: hashedPassword}).returning();

      data.password = await bcrypt.hash(data.password, 10);
      const [user] = await db.insert(userTable).values(data).returning();

      // @ts-ignore
      delete user.password;

      res.status(201).json({ user });
    } catch (e) {
      res.status(500).send("Something went wrong");
    }
  }
);

router.post(
  "/login",
  validateData(loginUserSchema),
  async (req: Request, res: Response) => {
    try {
      const { email, password } = req.cleanBody;

      const [user] = await db
        .select()
        .from(userTable)
        .where(eq(userTable.email, email));

      // If user not found
      if (!user) {
        res.status(401).json({ error: "Authentication failed" });
        return;
      }

      // If user password is not == to hashed password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        res.status(401).json({ error: "Authentication failed" });
        return;
      }

      // create a jwt token
      const token = jwt.sign(
        { userId: user.id, role: user.role },
        "secret-key",
        { expiresIn: "30d" }
      );

      // @ts-ignore
      delete user.password;
      res.status(200).send({ token, user });
    } catch (e) {
      res.status(500).send("Something went wrong");
    }
  }
);

export default router;
