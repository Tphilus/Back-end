const express = require("express");
const {
  getGoals,
  setGoal,
  deleteGoal,
  updateGoal,
} = require("../controllers/goalController");
const router = express.Router();

router.route("/").get(getGoals).post(setGoal);
router.route("/:id").put(updateGoal).delete(deleteGoal);

module.exports = router;
