import express from 'express';
import cors from "cors";
import config from './config/config';
import ConnectDB from './utils/connect';
import logger from './utils/logger';

const port = config.port;
const app = express();
app.use(express.json());
app.use(cors());

app.listen(port, async () => {
//   console.log(`Server is listening on port ${port}...`);
  logger.info(`Server is listening on http://localhost:${port}`)
  await ConnectDB();
});
