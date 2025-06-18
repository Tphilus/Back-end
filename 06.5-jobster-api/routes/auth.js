const express = require("express");
const router = express.Router();
const authenticateUser = require("../middleware/authentication");
const textUser = require("../middleware/textUser");
const rateLimiter = require('express-rate-limit');

const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  message: {
    msg: "Too many requests from this IP, please try again after 15 minutes",
  },
});

const { register, login, updateUser } = require("../controllers/auth");
router.post("/register", apiLimiter, register);
router.post("/login", apiLimiter, login);
router.patch("/updateUser", authenticateUser, updateUser, textUser);

module.exports = router;
