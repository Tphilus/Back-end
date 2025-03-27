const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");

// @desc Get goals
// @route GET /api/goals
// @access Private

const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({ user: req.user.id });

  res.status(200).send({ goals: goals });
});

// @desc Set goal
// @route POST /api/goal
// @access Private

const setGoal = asyncHandler(async (req, res) => {
  // console.log(req.body, "Hello");

  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const goal = await Goal.create({
    text: req.body.text,
    user: req.user.id,
  });

  res.status(201).json(goal);
});

// @desc Update goal
// @route PUT /api/goals/:id
// @access Private

const updateGoal = asyncHandler(async (req, res) => {
  _id = req.params.id;
  const goal = await Goal.findById(_id);

  if (!goal) {
    res.status(404);
    throw new Error("Goal not found");
  }

  const user = await UserActivation.findById(req.user.id);

  // Check for user
  if (!user) {
    res.status(401);
    throw new Error("USer not found");
  }

  // Make sure the logged in user matches the goal user
  if (goal.user.toString() !== user.id) {
    res.status(401);
    throw new Error("USer not authorize");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(_id, req.body, {
    new: true,
  });
  res.status(200).json(updatedGoal);
});

// @desc Delete goal
// @route DELETE /api/goals/:id
// @access Private

const deleteGoal = asyncHandler(async (req, res) => {
  // WE CAN USE THIS
  // _id = req.params.id;
  // const goal = await Goal.findById(_id);

  // if (!goal) {
  //   res.status(400);
  //   throw new Error("Goal not found");
  // }

  // await Goal.remove()

  // OR THIS ONE
  _id = req.params.id;

  const deleteGoal = await Goal.findByIdAndDelete(_id);
  if (!deleteGoal) {
    res.status(400);
    throw new Error("Id Not found");
  }

  // Check for user
  if (!user) {
    res.status(401);
    throw new Error("USer not found");
  }

  // Make sure the logged in user matches the goal user
  if (goal.user.toString() !== user.id) {
    res.status(401);
    throw new Error("USer not authorize");
  }

  res.status(200).json(deleteGoal);
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
