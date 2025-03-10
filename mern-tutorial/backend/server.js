require("dotenv").config();

const express = require("express");
const port = process.env.PORT || 5000;

const app = express();

app.use('/api/goals', require('./routes/goalRoutes'))

app.listen(port, () => {
  console.log(`Server start on port ${port}`);
});
