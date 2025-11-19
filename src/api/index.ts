import app from "../index";
import dbConnection from "../config/database";
import express, { Request, Response } from "express";

let isConnected = false;
async function connectDB() {
  if (!isConnected) {
    await dbConnection();
    isConnected = true;
  }
}

export default async function handler(req: Request, res: Response) {
  await connectDB();
  return app(req, res);
}