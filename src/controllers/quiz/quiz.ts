import {
  getSingleDoc,
  getAllDocs,
  createDoc,
  updateDoc,
  deleteDoc
} from '../factory/factoryController';

import { Quiz } from '../../models/quiz';


export const createQuiz = createDoc(Quiz);

export const getAllQuiz = getAllDocs(Quiz);

export const getSingleQuiz = getSingleDoc(Quiz);

export const updateQuiz = updateDoc(Quiz);

export const deleteQuiz = deleteDoc(Quiz);