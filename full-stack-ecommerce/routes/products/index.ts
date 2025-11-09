import { Request, Response, Router } from "express";
import { listProducts } from "./productContollers";

// Router
const router = Router();

router.get("/", listProducts);

router.get("/:id", (req: Request, res: Response) => {
  console.log(req.params);
  res.send(" A product ");
});

router.post("/", (req: Request, res: Response) => {
  res.send("New product created");
});

export default router;
