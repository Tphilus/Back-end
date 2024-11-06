const express = require("express");
const authorize = require("./authorize");
let { people } = require("./data");
const morgan = require("morgan");
const app = express();

//  req => middleware => res
// app.use(authorize)
app.use(express.static("./methods-public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// app.use(morgan["tiny"]);

// app.get("/api/people", authorize, (req, res) => {
//   res.status(200).json({
//     success: true,
//     data: people,
//   });
// });

app.get("/api/people", (req, res) => {
  res.status(200).json({
    success: true,
    number: people.length,
    data: people,
  });
});

app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(200)
      .json({ success: false, msg: "Please provide name value" });
  }
  res.status(201).send({ success: true });
});

app.post("/api/postman/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide name value" });
  }
  res.status(201).json({ success: true, data: [...people, name] });
});

app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.send("Please provide crediencials");
});

app.post("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  res.send("Hello world");
});

app.listen(5000, () => {
  console.log("Port is listerning ");
});

// GET => Reade Data
// POST => Insert Data
// PUT => Update Data
// DELETE => Delete Data
