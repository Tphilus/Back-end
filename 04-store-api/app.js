require("dotenv").config();
// async errors

const express = require("express");
const app = express();

const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");
// const { connect } = require("mongoose");
const connectDB = require("./db/connect");

// middleware
app.use(express.json());
app.use(notFoundMiddleware);
app.use(errorMiddleware);

// routes
app.get("/", (req, res) => {
  res.send(
    '<h1> Store API </h1> <a href="/api/v1/product">product routs </a> '
  );
});

app.use("/api/v1/products");

// products route

// listening Port
const port = process.env.PORT || 3000;

const start = async () => {
  try {
    // connectDB
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      return console.log(`Sever is listening on ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
