import { Express, Request, Response } from 'express';
import { createUserHandler } from '../controllers/user.controller';

function routes(app: Express) {
  app.get('/healthcheck', (_req: Request, res: Response) => {
    res.sendStatus(200);
  });

  app.post("/api/user", createUserHandler)
}

export default routes;
