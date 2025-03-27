const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs"); // for hashing your password
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
// const { use } = require("../routes/goalRoutes");

// @desc    Register new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  //   Check your email
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  //   Hash password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  // Create User
  const user = await User.create({
    name,
    email,
    password: hashPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }

  // res.json({ msg: "Register User" });
});

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Check for user email
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  }
});

// @desc    Get a user
// @route   GET /api/users/me
// @access  Public
const getMe = asyncHandler(async (req, res) => {
  // res.json({ msg: "User data display" });
  const { _id, name, email } = await User.findById(req.user.id);
  res.json({
    id: _id,
    name: name,
    email: email,
  });
});

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
