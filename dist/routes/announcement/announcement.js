"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.announcementRouter = void 0;
const express_1 = __importDefault(require("express"));
const announcement_1 = require("../../controllers/announcement/announcement");
const router = express_1.default.Router();
router.route('/')
    .post(announcement_1.createAnnouncement)
    .get(announcement_1.getAllAnnouncement);
router.route('/:id')
    .patch(announcement_1.updateAnnouncement)
    .get(announcement_1.getSingleAnnouncement)
    .delete(announcement_1.deleteAnnouncement);
exports.announcementRouter = router;
