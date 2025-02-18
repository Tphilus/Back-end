require("dotenv").config();
// async errors

const express = require("express");
const app = express();

const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");

// middleware
app.use(express.json());
app.use(notFoundMiddleware);
app.use(errorMiddleware)


// routes
app.get("/", (req, res) => {
  res.send(
    '<h1> Store API </h1> <a href="/api/v1/product">product routs </a> '
  );
});


// products route


// listening Port
const PORT = 3000;
app.listen(PORT, () => {
  return console.log(`Sever is listening on ${PORT}`);
});
