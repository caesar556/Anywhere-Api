import express from 'express';

import {
  createAnnouncement,
  getAllAnnouncement,
  getSingleAnnouncement,
  updateAnnouncement,
  deleteAnnouncement
} from '../../controllers/announcement/announcement';

const router = express.Router();

router.route('/')
  .post(createAnnouncement)
  .get(getAllAnnouncement)


router.route('/:id')
  .patch(updateAnnouncement)
  .get(getSingleAnnouncement)
  .delete(deleteAnnouncement)


export const announcementRouter = router;