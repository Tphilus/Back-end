import { ErrorRequestHandler } from "express";
import logger from "../common/utils/logger";
import { httpStatus } from "../config/http.config";

export const errorHandler: ErrorRequestHandler = (
  error,
  req,
  res,
  next
): any => {
  logger.error(`Error occurred on PATH: ${req.path}`, error);

  if(error instanceof SyntaxError) {
    return res.status(httpStatus.BAD_REQUEST).json({
        msg: "Invalid JSON format, please check your request body"
    })
  }

  return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
    msg: "Internal Server Error",
    error: error?.message || "Unknown error occurred",
  });
};
