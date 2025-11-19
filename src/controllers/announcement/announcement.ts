import { Announcement } from '../../models/announcement';
import {
  getSingleDoc,
  getAllDocs,
  createDoc,
  updateDoc,
  deleteDoc
} from '../factory/factoryController';


export const createAnnouncement = createDoc(Announcement);

export const getAllAnnouncement = getAllDocs(Announcement);

export const getSingleAnnouncement = getSingleDoc(Announcement);

export const updateAnnouncement = updateDoc(Announcement);

export const deleteAnnouncement = deleteDoc(Announcement);