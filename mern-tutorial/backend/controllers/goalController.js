const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");

// @desc Get goals
// @route GET /api/goals
// @access Private

const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();

  res.status(200).json({ goals: goals });
});

// @desc Set goal
// @route POST /api/goal
// @access Private

const setGoal = asyncHandler(async (req, res) => {
  console.log(req.body, "Hello");

  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  res.status(201).json({ message: "Set goal" });
});

// @desc Update goal
// @route PUT /api/goals/:id
// @access Private

const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
});

// @desc Delete goal
// @route DELETE /api/goals/:id
// @access Private

const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
