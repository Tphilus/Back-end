import mongoose from "mongoose";
import logger from "../common/utils/logger";
import { config } from "../config/app.config";

async function ConnectDB() {
  const mongoURI = config.MONGO_URI;

  try {
    await mongoose.connect(mongoURI);
    logger.info("DB connected");
  } catch (error) {
    logger.error("Could not connect to db");
    process.exit(1);
  }
}

export default ConnectDB;
