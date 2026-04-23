import { getAuth, requireAuth } from "@clerk/express";
import type { NextFunction, Request, Response } from "express";
import { User } from "../models/User";

export type AuthRequest = Request & {
  userId?: string;
};

export const protectRoute = [
  requireAuth(),
  async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
      const { userId: clerkId } = getAuth(req);
      if (!clerkId)
        return res
          .status(401)
          .json({ message: "Unauthorized - invalid token" });

      const user = await User.findOne({ clerkId });
      if (!user) res.status(404).json({ msg: "User not found" });

      req.userId = user?._id.toString();

      next();
    } catch (error) {
      console.log("Error in protectRoute middleware", error);
      res.status(500).json({ msg: "Internal server error" });
    }
  },
];
