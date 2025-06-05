const express = require("express");
const {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
} = require("../controllers/jobs");
const router = express.Router();

router.route("/").post(createJob).get(getAllJobs);
router.route("/:id").post(getJob).delete(deleteJob).patch(updateJob);

module.exports = router