require("dotenv").config();

const express = require("express");
const port = process.env.PORT || 5000;

const app = express();

app.get("api/goals", (req, res) => {
  res.status(200).json({ message: "Get Goals" });
});

app.listen(port, (req, res) => {
  console.log(`Server start on port ${port}`);
});
