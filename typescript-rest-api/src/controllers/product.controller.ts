import { Response, Request } from 'express';
import { productModal } from '../models/product.model';

export const getAllProducts = async (
  _req: Request,
  res: Response,
): Promise<void> => {
  try {
    const products = await productModal.find({});
    res.status(200).json({ products, count: products.length });
  } catch (error) {
    res.status(400).json({ error: 'Invalid Request' });
  }
};

export const createProduct = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const newProduct = await productModal.create(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create product', details: error });
  }
};

// GET /api/product/:id
export const getProductById = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const product = await productModal.findById(req.params.id);
    if (!product) {
      res.status(404).json({ error: 'Product not found' });
      return;
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: 'Invalid ID', details: error });
  }
};

export const updateProduct = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const updated = await productModal.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      },
    );

    if (!updated) {
      res.status(404).json({ error: 'Product not found' });
      return;
    }

    res.status(200).json(updated);
  } catch (error) {
    res.status(400).json({ error: 'Update failed', details: error });
  }
};

// DELETE /api/product/:id
export const deleteProduct = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const deleted = await productModal.findByIdAndDelete(req.params.id);
    if (!deleted) {
      res.status(404).json({ error: 'Product not found' });
      return;
    }

    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Deletion failed', details: error });
  }
};
