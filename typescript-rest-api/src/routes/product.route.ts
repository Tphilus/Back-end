import express from 'express';
import { createProduct, deleteProduct, getAllProducts, getProductById, updateProduct } from '../controllers/product.controller';
import { verifyToken } from '../middleware/VerifyToken';
const router = express.Router();

router.get('/', verifyToken, getAllProducts)
router.post('/create', verifyToken, createProduct)
router.get('/:id', verifyToken, getProductById);
router.put('/update/:id', verifyToken, updateProduct);
router.delete('/:id', verifyToken, deleteProduct);

export { router as productRouter };
