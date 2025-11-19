import { errorHandler } from '../../middleware/errorHandler';
import AppError from '../../utils/AppError';
import { Model, Document } from 'mongoose';
import express, { Request, Response, NextFunction } from 'express';
import { SUCCESS } from '../../utils/httpStatus';



export const getSingleDoc = <T extends Document>(model: Model<T>) => errorHandler(
  async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {

    const { id } = req.params;
    const singleDoc = await model.findById(id);
    if (!singleDoc) return next(new AppError("No document found with this id", 404));

    res.status(200).json({
      status: SUCCESS,
      data: singleDoc,
    });
  }
);

export const getAllDocs = <T extends Document>(model: Model<T>) => errorHandler(
  async (req: Request<{}, {}, {}, any>, res: Response) => {
    const totalDocs = await model.find();

    res.status(200).json({
      status: SUCCESS,
      data: totalDocs,
    });

  }
);

export const createDoc = <T extends Document>(model: Model<T>) => errorHandler(
  async (req: Request<{}, {}, Partial<T>>, res: Response, next: NextFunction) => {
    const userData = req.body;

    if (!userData || Object.keys(userData).length === 0) return next(new AppError("No data provided", 400));


    const newDoc = await model.create(userData);

    res.status(201).json({
      status: SUCCESS,
      data: newDoc,
    });
  }
);

export const updateDoc = <T extends Document>(model: Model<T>) => errorHandler(
  async (req: Request<{ id: string }, {}, Partial<T>>, res: Response, next: NextFunction) => {
    const { id } = req.params;

    const updatedDoc = await model.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    if (!updatedDoc) return next(new AppError("No document found with this id", 404));

    res.status(200).json({
      status: SUCCESS,
      data: updatedDoc,
    });
  }
);

export const deleteDoc = <T extends Document>(model: Model<T>) =>
  errorHandler(async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const doc = await model.findByIdAndDelete(id);
    if (!doc) return next(new AppError("No document found with this id", 404));

    res.status(200).json({
      status: SUCCESS,
      data: null,
    });
  });