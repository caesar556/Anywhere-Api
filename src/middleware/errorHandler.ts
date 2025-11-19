import { Request, Response, NextFunction } from 'express';

export const errorHandler = <P extends Record<string, string | undefined> = Record<string, string | undefined>>(
  fn: (req: Request<P>, res: Response, next: NextFunction) => Promise<any>
) => {
  return async (req: Request<P>, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next);
  };
};