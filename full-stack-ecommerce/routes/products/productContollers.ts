import { eq } from "drizzle-orm";
import { Request, Response } from "express";
import { db } from "../../db/index";
import { productsTable } from "../../db/productSchema";

export async function listProducts(req: Request, res: Response) {
  try {
    const products = await db.select().from(productsTable);
    res.status(200).json({ data: products });
  } catch (e) {
    res.status(500).send(e);
  }
}

export async function getProductById(req: Request, res: Response) {
  try {
    // get id from params
    const id = Number(req.params.id);

    // query product
    const [product] = await db
      .select()
      .from(productsTable)
      .where(eq(productsTable.id, id));

    // handle missing product
    if (!product) {
      return res.status(404).json({ msg: "Product not found" });
    }

    // success
    return res.status(200).json(product);
  } catch (e) {
    return res.status(500).json({ msg: "Internal Server Error", e });
  }
}

export async function createProduct(req: Request, res: Response) {
  try {
    console.log(req.userId);

    const [product] = await db
      .insert(productsTable)
      .values(req.cleanBody)
      .returning();

    res.status(201).json(product);
  } catch (e) {
    res.status(500).send(e);
  }
}

export async function updateProduct(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const updateFields = req.cleanBody;

    const [product] = await db
      .update(productsTable)
      .set(updateFields)
      .where(eq(productsTable.id, id))
      .returning();

    if (!product) {
      return res.status(404).send({ msq: "Product was not found" });
    }

    return res.status(200).json(product);
  } catch (e) {
    res.status(500).send(e);
  }
}

export async function deleteProduct(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const [deletedProduct] = await db
      .delete(productsTable)
      .where(eq(productsTable.id, id))
      .returning();

    if (!deletedProduct) {
      return res.status(404).send({ msq: "Product was not found" });
    }

    return res.status(204).send();
  } catch (e) {
    res.status(500).send(e);
  }
}
