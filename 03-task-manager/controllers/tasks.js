const Task = require('../models/Task')
const getAllTasks = (req, res) => {
  res.send("get all tasks");
};

const createTasks = async (req, res) => {
  const task = await Task.create(req.params)
  res.status(201).json({
    message: "Task created",
    task
  })
};

const getTask = (req, res) => {
  res.json({id:req.param.id})
};

const updateTask = (req, res) => {
  res.send("update task");
};

const deleteTask = (req, res) => {
  res.send("delete task");
};

module.exports = {
  getAllTasks,
  createTasks,
  getTask,
  updateTask,
  deleteTask,
};
