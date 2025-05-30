const CustomApiError = require("../errors/custom-error");
const jwt = require('jsonwebtoken')
// JWT - Headers, Payload and Signature 

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new CustomApiError('Please provide email and password', 400);
  }
  res.send("Fake Login/Register/Signup Route");
};

const dashboard = async (req, res) => {
  const luckyNumbr = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello, Philus`,
    secret: `Here is your authorize data, your lucky number is ${luckyNumbr}`,
  });
};

module.exports = {
  login,
  dashboard,
};
