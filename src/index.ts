import express, { Request, Response, NextFunction } from "express";
import dotenv from 'dotenv';
import cors from "cors";
import dbConnection from './config/database';
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';
import globalErrorHandler from './middleware/globalError';
import AppError from './utils/AppError';
import { quizRouter } from './routes/quiz/quiz';
import { announcementRouter } from './routes/announcement/announcement';

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
dotenv.config();
dbConnection();

app.use(express.json({ limit: '10kb' }));
app.use(helmet());


app.use('/quiz', quizRouter);
app.use('/announcement', announcementRouter);


app.use(globalErrorHandler);

//app.listen(port, () => {
// console.log(`Server running on port ${port}`);
//});


export default app;