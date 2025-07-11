import express from 'express';
import cors from "cors";
import config from './config/config';
import ConnectDB from './utils/connect';
import logger from './utils/logger';
import { userRouter } from './routes/user.route';
import { productRouter } from './routes/product.route';


const port = config.port;
const app = express();
app.use(express.json());
app.use(cors());

app.use("/app/v1/auth", userRouter)
app.use("/app/v1/product", productRouter)


app.listen(port, async () => {
//   console.log(`Server is listening on port ${port}...`);
  logger.info(`Server is listening on http://localhost:${port}`)
  await ConnectDB();
});
