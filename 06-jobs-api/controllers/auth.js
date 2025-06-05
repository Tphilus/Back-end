const { BadRequestError } = require("../errors");
const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  // ===== ===  hashing password
  //   const { name, email, password } = req.body;

  //   const salt = await bcrypt.genSalt(10);
  //   const hashedPassword = await bcrypt.hash(password, salt);

  //   const tempUser = { name, email, password: hashedPassword };
  // ===== === End of  hashing password

  //   if (!name || !email || !password) {
  //     throw new BadRequestError("Please provide name, email and password");
  //   }
  const user = await User.create({ ...req.body });
  res.status(StatusCodes.CREATED).json({ user });
};

const login = async (req, res) => {
  res.send("login user");
};

module.exports = {
  register,
  login,
};
