// const { BadRequestError } = require("../errors");
const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
// const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { BadRequestError, UnauthenticatedError } = require("../errors");
const bcrypt = require("bcryptjs/dist/bcrypt");

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
  const token = jwt.sign(
    {
      userId: user._id,
      name: user.name,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_LIFETIME,
    }
  );
  res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
};

// ====== LOGIN =======
const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError("Please provide email and password");
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw new UnauthenticatedError("Invalid Credentials");
  }
  //   compare password

  const isPasswordCorrect = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("Invalid Credentials");
  }

  const token = jwt.sign(
    {
      userId: user._id,
      name: user.name,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_LIFETIME,
    }
  );

  res.status(StatusCodes.OK).json({ user: { name: user.name }, token });
};

module.exports = {
  register,
  login,
};
