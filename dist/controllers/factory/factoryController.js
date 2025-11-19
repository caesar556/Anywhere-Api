"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDoc = exports.updateDoc = exports.createDoc = exports.getAllDocs = exports.getSingleDoc = void 0;
const errorHandler_1 = require("../../middleware/errorHandler");
const AppError_1 = __importDefault(require("../../utils/AppError"));
const httpStatus_1 = require("../../utils/httpStatus");
const getSingleDoc = (model) => (0, errorHandler_1.errorHandler)(async (req, res, next) => {
    const { id } = req.params;
    const singleDoc = await model.findById(id);
    if (!singleDoc)
        return next(new AppError_1.default("No document found with this id", 404));
    res.status(200).json({
        status: httpStatus_1.SUCCESS,
        data: singleDoc,
    });
});
exports.getSingleDoc = getSingleDoc;
const getAllDocs = (model) => (0, errorHandler_1.errorHandler)(async (req, res) => {
    const totalDocs = await model.find();
    res.status(200).json({
        status: httpStatus_1.SUCCESS,
        data: totalDocs,
    });
});
exports.getAllDocs = getAllDocs;
const createDoc = (model) => (0, errorHandler_1.errorHandler)(async (req, res, next) => {
    const userData = req.body;
    if (!userData || Object.keys(userData).length === 0)
        return next(new AppError_1.default("No data provided", 400));
    const newDoc = await model.create(userData);
    res.status(201).json({
        status: httpStatus_1.SUCCESS,
        data: newDoc,
    });
});
exports.createDoc = createDoc;
const updateDoc = (model) => (0, errorHandler_1.errorHandler)(async (req, res, next) => {
    const { id } = req.params;
    const updatedDoc = await model.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedDoc)
        return next(new AppError_1.default("No document found with this id", 404));
    res.status(200).json({
        status: httpStatus_1.SUCCESS,
        data: updatedDoc,
    });
});
exports.updateDoc = updateDoc;
const deleteDoc = (model) => (0, errorHandler_1.errorHandler)(async (req, res, next) => {
    const { id } = req.params;
    const doc = await model.findByIdAndDelete(id);
    if (!doc)
        return next(new AppError_1.default("No document found with this id", 404));
    res.status(200).json({
        status: httpStatus_1.SUCCESS,
        data: null,
    });
});
exports.deleteDoc = deleteDoc;
