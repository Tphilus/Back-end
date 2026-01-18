import type { Response } from "express";
import express from "express";

import {
  default as authRoutes,
  default as chatRoutes,
  default as messageRoutes,
  default as userRoutes,
} from "./routes/authRoutes";

const app = express();

app.use(express.json()); // parses incoming JSON request bodies and makes them available as req, body in your route handlers

app.get("/health", (_, res: Response) => {
  res.json({ status: "ok", message: "server is running" });
});


app.use("/api/auth", authRoutes);
app.use("/api/chats", chatRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/users", userRoutes);

export default app;
