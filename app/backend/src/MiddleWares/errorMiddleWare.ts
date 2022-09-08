import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

export interface CustomError extends Error {
  code: number,
}

const errorMiddleWare: ErrorRequestHandler = (
  err: CustomError,
  req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const { code } = err;
  if (code) return res.status(code).json({ message: err.message });
  if (err.name === 'JsonWebTokenError') {
    return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Token must be a valid token' });
  }
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: err.message });
};
export default errorMiddleWare;
