const errorHandleMiddleware = (err, req, res, next) => {
  console.log(err);
  // return res.status(500).json({ msg: "something went wrong, try again later" });
  return res.status(err.status).json({ msg: err.message });
};

module.exports = errorHandleMiddleware;