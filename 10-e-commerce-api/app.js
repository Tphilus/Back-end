require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
const cors = require("cors");

// rest of the package
const morgan = require("morgan");

// database
const connectDB = require("./db/connect");

// routers 
const authRouter = require("./routes/authRoutes");
const userRouter = require("./routes/userRoutes");

// middleware
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(morgan("tiny"));
app.use(express.json()); // To see the json files
app.use(cookieParser(process.env.JWT_SECRET));
app.use(express.static("./public"));
app.use(cors());

app.get("/", (req, res) => {
  res.send("E-commerce api");
});
app.get("/api/v1", (req, res) => {
  // console.log(req.cookies);
  console.log(req.signedCookies);

  res.send("E-commerce api");
});
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 8080;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
