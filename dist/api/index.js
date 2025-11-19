"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = handler;
const index_1 = __importDefault(require("../src/index"));
const database_1 = __importDefault(require("../src/config/database"));
let isConnected = false;
async function connectDB() {
    if (!isConnected) {
        await (0, database_1.default)();
        isConnected = true;
    }
}
async function handler(req, res) {
    await connectDB();
    return (0, index_1.default)(req, res);
}
