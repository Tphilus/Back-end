import { Request, Response } from "express";

export function listProducts(req: Request, res: Response) {
  res.send("list of products");
}

export function getProductById(req: Request, res: Response) {
  console.log(req.params);
  res.send("");
}

export function createProduct(req: Request, res: Response) {
  res.send("");
}
