import { Request, Response } from "express";
import logger from '../utils/logger';
import { createUser } from "../service/user.service";

export async function createUserHandler(req:Request, res: Response){
    try {
    const user = await createUser(req.body);
    return res.status(201).json(user);
  } catch (e: any) {
    logger.error(e);
    return res.status(500).send(e.message);
  }
}