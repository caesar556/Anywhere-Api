"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const database_1 = __importDefault(require("./config/database"));
const helmet_1 = __importDefault(require("helmet"));
const globalError_1 = __importDefault(require("./middleware/globalError"));
const quiz_1 = require("./routes/quiz/quiz");
const announcement_1 = require("./routes/announcement/announcement");
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
app.use((0, cors_1.default)());
dotenv_1.default.config();
(0, database_1.default)();
app.use(express_1.default.json({ limit: '10kb' }));
app.use((0, helmet_1.default)());
app.use('/quiz', quiz_1.quizRouter);
app.use('/announcement', announcement_1.announcementRouter);
app.use(globalError_1.default);
//app.listen(port, () => {
// console.log(`Server running on port ${port}`);
//});
exports.default = app;
