import app from "../index";
import dbConnection from "../config/database";

let isConnected = false;
async function connectDB() {
  if (!isConnected) {
    await dbConnection();
    isConnected = true;
  }
}

export default async function handler(req, res) {
  await connectDB();
  return app(req, res);
}