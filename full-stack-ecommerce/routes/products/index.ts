import { Router } from "express";
import {
  createProductSchema,
  updateProductSchema,
} from "../../db/productSchema";
import { verifyToken } from "../../middleware/authMiddleware";
import { validateData } from "../../middleware/validationMiddleware";
import {
  createProduct,
  deleteProduct,
  getProductById,
  listProducts,
  updateProduct,
} from "./productContollers";

// Router
const router = Router();

router.get("/", listProducts);

router.get("/:id", getProductById);

router.post("/", verifyToken, validateData(createProductSchema), createProduct);

router.put(
  "/:id",
  verifyToken,
  validateData(updateProductSchema),
  updateProduct
);

router.delete("/:id", deleteProduct);

export default router;
