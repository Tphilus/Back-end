const getAllJobs = async (req, res) => {
  res.status("Get all jobs");
};

const getJob = async (req, res) => {
  res.send("Get a job");
};

const createJob = async (req, res) => {
  res.send("Create a Job");
};

const updateJob = async (req, res) => {
  res.send("Update a Job");
};

const deleteJob = async (req, res) => {
  res.send("Delete a Job");
};

module.exports = {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
};
