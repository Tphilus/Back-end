import dotenv from 'dotenv';
dotenv.config();

if (!process.env.MONGO_URI) {
  throw new Error(' MONGO_URI is not defined in the .env file.');
}

interface Config {
  port: number;
  nodeEnv: string;
  mongoURI: string;
}

const config: Config = {
  port: Number(process.env.PORT) || 8080,
  nodeEnv: process.env.NODE_ENV || 'development',
  mongoURI: process.env.MONGO_URI,
};

export default config;
