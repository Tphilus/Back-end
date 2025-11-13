export {};

declare global {
  namespace Express {
    interface Request {
      cleanBody?: any;
      userId?: Number;
    }
  }
}
