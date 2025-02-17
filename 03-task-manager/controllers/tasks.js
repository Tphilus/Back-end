const Task = require("../models/Task");
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../error/custom-error");
const getAllTasks = asyncWrapper(async (req, res) => {
  const task = await Task.find({});
  res.status(200).json({ tasks: task });
  // res.status(500).json({ msg: error });
});

const createTasks = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({
    task,
  });
  // res.status(500).json({ msg: error });
});

const getTask = asyncWrapper(async (req, res, next) => {
  // try {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });

  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, 404));
    // return res.status(404).json({ msg: `No task with id : ${taskID}` });
  }
  res.status(200).json({ tasks: task });
  // } catch (error) {
  //   res.status(500).json({ msg: error });
  // }
});

const deleteTask = asyncWrapper(async (req, res) => {
  // try {
  // ID for the params
  const { id: taskID } = req.params;

  // finding the same unique ID to delete it
  const task = await Task.findByIdAndDelete({ _id: taskID });

  // if the Unique ID is not the same
  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, 404));

    // return res.status(404).json({ msg: `No task with id : ${taskID}` });
  }
  res.status(200).json({ deleteTask: task });
  // } catch (error) {
  //   res.status(500).json({ msg: error });
  // }
});

const updateTask = asyncWrapper(async (req, res) => {
  // try {
  // ID for the params
  const { id: taskID } = req.params;

  // finding the same unique ID to update it
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });

  // if the Unique ID is not the same
  if (!task) {
    return res.status(404).json({ msg: `No task with id : ${taskID}` });
  }
  // } catch (error) {
  //   res.status(500).json({ msg: error });
  // }
});

module.exports = {
  getAllTasks,
  createTasks,
  getTask,
  updateTask,
  deleteTask,
};
