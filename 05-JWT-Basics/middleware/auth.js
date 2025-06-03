const jwt = require("jsonwebtoken");
const CustomAPIError = require("../errors/custom-error");

const authenticationMiddleware = async (req, res, next) => {
  const authHeader = req.header.authorization;

  if (!authHeader || !authHeader.startWith("Bearer ")) {
    throw new CustomApiError("No token provided", 400);
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id, username } = decoded;
    req.user = { id, username };
    next();
  } catch (error) {
    throw new CustomAPIError("Not authorize to access ghis route", 401);
    console.log(error);
  }
};

module.ex = authenticationMiddleware;
