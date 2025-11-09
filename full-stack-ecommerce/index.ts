import express, { Request, Response } from "express";
import productRouter from "./routes/products";

const port = 8000;

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World");
});

app.use("/products", productRouter);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
