const express = require("express");
const {
  getAllTasks,
  createTasks,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");
const router = express.Router();

router.route("/").get(getAllTasks)
router.route("/").post(createTasks)
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
