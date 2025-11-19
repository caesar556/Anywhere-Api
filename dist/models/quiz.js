"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quiz = void 0;
const mongoose_1 = require("mongoose");
const quizSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: [true, "title is required"],
        minLength: [3, "must be at least 3 charcter"],
        maxLength: [50, "Too long title "]
    },
    course: {
        type: String,
        required: [true, "description is required"],
        minLength: [3, "must be at least 3 charcter"],
        maxLength: [50, "Too long title "]
    },
    dueDate: {
        type: Date
    },
    semester: {
        type: String,
        required: [true, "semester is required"],
        minLength: [3, "must be at least 50 charcter"],
        maxLength: [50, "Too long semester "]
    }
}, { timestamps: true });
exports.Quiz = (0, mongoose_1.model)("Quiz", quizSchema);
