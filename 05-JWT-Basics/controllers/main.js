const CustomApiError = require("../errors/custom-error");
const jwt = require("jsonwebtoken");
// JWT - Headers, Payload and Signature

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new CustomApiError("Please provide email and password", 400);
  }

  // just for demo normally provided by DB!
  const id = new Date().getDate();

  // try to keep payload small, better experience for user
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.status(200).json({ msg: "user created", token });
};

const dashboard = async (req, res) => {
  


 const luckyNumbr = Math.floor(Math.random() * 100);

    res.status(200).json({
      msg: `Hello, ${decoded.username}`,
      secret: `Here is your authorize data, your lucky number is ${luckyNumbr}`,
    });

};

module.exports = {
  login,
  dashboard,
};
