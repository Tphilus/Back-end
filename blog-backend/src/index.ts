// create our first https server
import dotenv from "dotenv";
import express from "express";
import swaggerUI from "swagger-ui-express";
import { connectDB } from "./config/database";
import swaggerSpec from "./config/swagger";
import authRoutes from "./routes/authRoutes";

dotenv.config();
const app = express();

const PORT = 3000;

// middleware
app.use(express.json()); // to parse JSON bodies

app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port at http://localhost:${PORT}`);
});

connectDB().catch((err) => {
  console.log(err);
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
