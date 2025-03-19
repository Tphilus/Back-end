const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs") // for hashing your password
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel")

// @desc    Register new user
// @route   POST /api/users
// @access  Public
const registerUser = (req, res) => {
  res.json({ msg: "Register User" });
};

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
const loginUser = (req, res) => {
  res.json({ msg: "Login User" });
};

// @desc    Get a user
// @route   GET /api/users/me
// @access  Public
const getMe = (req, res) => {
  res.json({ msg: "User data display" });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
