import mongoose from 'mongoose';
import config from '../config/config';
import logger from './logger'

async function ConnectDB() {
  const mongoURI = config.mongoURI;

  try {
    // console.log('Connecting to MongoDB:', mongoURI);
    await mongoose.connect(mongoURI);
    logger.info('DB connected');
  } catch (error) {
    logger.error('Could not connect to db');
    process.exit(1);
  }
}

export default ConnectDB;
