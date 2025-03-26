const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  res.status(statusCode);

  res.json({
    msg: err.msg,
    stack: process.env.NODE_ENV === "product" ? null : err.stack,
  });
};

module.exports = {
  errorHandler,
};
