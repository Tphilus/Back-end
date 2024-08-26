const express = require('express');
const morgan = require('morgan');

const tourRouter = require("./routers/tourRouters")
const userRouter = require("./routers/userRouters")

const app = express();

// 1) Middleware
app.use(morgan('dev'));
app.use(express.json()); // Midleware

app.use((req, res, next) => {
  console.log('Hello from the middleware');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});



// 3) ROUTE

  app.use('/api/v1/tours', tourRouter)
  app.use('/api/v1/users', userRouter)

  module.exports = app;

