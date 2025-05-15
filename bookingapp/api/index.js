import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import cookieParser from 'cookie-parser'


const app = express();
dotenv.config();

// MongoDB Connect
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

// Check if mongoose is disconnected
mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

// middleware
app.use(cookieParser()) // cookies
app.use(express.json()) // Help to send json to the server

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

// error middleware 
app.use((error,req,res,next) => {
  const errorStatus = error.status || 500
  const errorMessage = error.message || "Something went wrong!"
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: error.stack
  })
})

// port 
app.listen(8000, () => {
  connect();
  console.log("Connected to backend!");
});
