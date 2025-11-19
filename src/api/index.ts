import express from "express";
import serverless from "serverless-http";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import dbConnection from "../config/database";
import globalErrorHandler from "../middleware/globalError";
import { quizRouter } from "../routes/quiz/quiz";
import { announcementRouter } from "../routes/announcement/announcement";

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json({ limit: "10kb" }));
app.use(helmet());
//app.use(mongoSanitize());

app.use((req, res, next) => {
  console.table({ path: req.url, method: req.method });
  next();
});

// Routes
app.use("/quiz", quizRouter);
app.use("/announcement", announcementRouter);

// Error handler
app.use(globalErrorHandler);

// Connect DB once
let isConnected = false;
const connectDBOnce = async () => {
  if (!isConnected) {
    await dbConnection();
    isConnected = true;
  }
};

// Export serverless handler
const handler = async (req, res) => {
  await connectDBOnce();
  return app(req, res);
};

export default serverless(handler);