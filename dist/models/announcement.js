"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Announcement = void 0;
const mongoose_1 = require("mongoose");
const announcementSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: [true, "title is required"],
        minLength: [3, "must be at least 3 charcter"],
        maxLength: [50, "Too long title "]
    },
    description: {
        type: String,
        required: [true, "description is required"],
        minLength: [50, "must be at least 50 charcter"],
        maxLength: [150, "Too long title "]
    },
    date: {
        type: Date,
        default: Date.now()
    },
    semester: {
        type: String,
        required: [true, "semester is required"],
        minLength: [3, "must be at least 50 charcter"],
        maxLength: [50, "Too long semester "]
    }
}, { timestamps: true });
exports.Announcement = (0, mongoose_1.model)("Announcement", announcementSchema);
