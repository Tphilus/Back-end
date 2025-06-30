const { StatusCodes } = require("http-status-codes");

const getAllUsers = async (req, res) => {
  res.status(StatusCodes.OK).send("Get All Users");
};

const getSingleUser = async (req, res) => {
  res.status(StatusCodes.OK).send("Get A Single User");
};

const showCurrentUser = async (req, res) => {
  res.status(StatusCodes.OK).send("Show Current Users");
};

const updateUser = async (req, res) => {
  res.status(StatusCodes.OK).send("Update User");
};

const updateUserPassword = async (req, res) => {
  res.status(StatusCodes.OK).send("Update User Password");
};

module.exports = {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUser,
  updateUserPassword,
};
