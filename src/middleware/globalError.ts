import { Request, Response, NextFunction } from "express";
import AppError from "../utils/AppError";

interface MongoDuplicateError extends Error {
  code: number;
  keyValue?: Record<string, unknown>;
}

interface MongooseCastError extends Error {
  name: "CastError";
  path: string;
  value: string;
}

interface MongooseValidationError extends Error {
  name: "ValidationError";
  errors: Record<string, { message: string }>;
}

const handleDuplicateValuesDB = (err: MongoDuplicateError) => {
  const value = Object.values(err.keyValue || {}).join(", ");
  const message = `Sorry, the value "${value}" is duplicated. Please try again with a different value.`;
  return new AppError(message, 400);
};

const handleCastErrorDB = (err: MongooseCastError) => {
  const message = `Invalid ${err.path}: ${err.value}.`;
  return new AppError(message, 400);
};

const handleValidationErrorDB = (err: MongooseValidationError) => {
  const errors = Object.values(err.errors).map((e) => e.message);
  const message = `Invalid input data. ${errors.join(". ")}`;
  return new AppError(message, 400);
};

const sendErrorDev = (err: AppError, res: Response) => {
  res.status(err.statusCode).json({
    Status: err.status,
    Error: err,
    Message: err.message,
    Stack: err.stack,
  });
};

const sendErrorProd = (err: AppError, res: Response) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      Status: err.status,
      Message: err.message,
    });
  } else {
    console.error("ERROR 💥", err);
    res.status(500).json({
      Status: "error",
      Message: "Something went wrong! Please try again later.",
    });
  }
};

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  if (process.env.NODE_ENV === "development") {
    sendErrorDev(err, res);
  } else {
    let error = { ...err, message: err.message };

    if (err.name === "CastError") error = handleCastErrorDB(err);
    if (err.code === 11000) error = handleDuplicateValuesDB(err);
    if (err.name === "ValidationError") error = handleValidationErrorDB(err);

    sendErrorProd(error, res);
  }
};

export default globalErrorHandler;