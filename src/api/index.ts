import app from "../config/database";
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
  console.log("hello from vercl");
  return app(req, res);
}