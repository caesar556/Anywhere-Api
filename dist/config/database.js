"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dbConnection = async () => {
    try {
        if (!process.env.MONGO_URL) {
            throw new Error('MONGO_URL is undfined');
        }
        const conn = await mongoose_1.default.connect(process.env.MONGO_URL);
        console.log(`✅ Database connected: ${conn.connection.host}`);
    }
    catch (err) {
        console.error("❌ Database connection error:", err);
        process.exit(1);
    }
};
exports.default = dbConnection;
