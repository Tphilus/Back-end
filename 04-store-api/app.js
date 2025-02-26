// require("express").config();

// async errors

const express = require("express");
const app = express();

const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");

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

const port = process.env.PORT || 3000;

const startServer = async () => {
  try {
    // connectDB 
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
