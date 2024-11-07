const express = require("express");
const authorize = require("./authorize");
let { people } = require("./data");
const morgan = require("morgan");
const app = express();
const people = require('./routes/people')

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

app.use('/api/people', people);

app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.send("Please provide crediencials");
});



app.listen(5000, () => {
  console.log("Port is listerning ");
});

// GET => Reade Data
// POST => Insert Data
// PUT => Update Data
// DELETE => Delete Data
