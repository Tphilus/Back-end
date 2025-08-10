import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import express, { Request, Response } from "express";
import { config } from "./config/app.config";
import ConnectDB from "./db/db";
import logger from './common/utils/logger';
import { errorHandler } from "./middleware/errorHanddler";
import { httpStatus } from "./config/http.config";

const app = express();
const BASE_PATH = config.BASE_PATH;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: config.APP_ORIGIN,
    credentials: true,
  })
);

app.use(cookieParser());

app.post("/", (_req: Request, res: Response) => {
  res.status(httpStatus.OK).json({ msg: "Hello world" });
});

app.use(errorHandler)

app.listen(config.PORT, async () => {
   logger.info(
    `Server is listening on http://localhost:${config.PORT} in ${config.NODE_ENV}`
  );
  await ConnectDB()
});
