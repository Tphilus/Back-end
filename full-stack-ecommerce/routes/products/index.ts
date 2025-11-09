import { Request, Response, Router } from "express";

// Router
const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("The list of projects");
});

router.get("/:id", (req: Request, res: Response) => {
  console.log(req.params);
  res.send(" A product ");
});

router.post("/", (req: Request, res: Response) => {
  res.send("New product created");
});

export default router;
