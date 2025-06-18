const express = require("express");
const textUser = require("../middleware/textUser");

const router = express.Router();
const {
  createJob,
  deleteJob,
  getAllJobs,
  updateJob,
  getJob,
  showStats,
} = require("../controllers/jobs");

router.route("/").post(textUser, createJob).get(getAllJobs);
router.route("/stats").get(showStats);


router
  .route("/:id")
  .get(getJob)
  .delete(textUser, deleteJob)
  .patch(textUser, updateJob);

module.exports = router;
