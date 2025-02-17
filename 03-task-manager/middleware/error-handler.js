const { CustomAPIError } = require("../error/custom-error");
const errorHandleMiddleware = (err, req, res, next) => {
  // console.log(err);
  // return res.status(500).json({ msg: "something went wrong, try again later" });
  if(err instanceof CustomAPIError){
    return res.status(err.statusCode).json();
  }
  return res
    .status(500)
    .json({ msg: "Something went wrong, please try again" });
};

module.exports = errorHandleMiddleware;
