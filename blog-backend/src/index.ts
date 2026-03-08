// create our first https server
import express, { Request, Response } from "express";

const app = express();

const PORT = 3000;

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Hello World!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port at http://localhost:${PORT}`);
});

// Model:
// Handles date logic
// Interacts with database

// Controller
// Handles request flow
// Never handles data logic

// End User
// Request and Response

// View
// Handles Data presentations
// Dynamically redered
