import express from 'express';

import {
  createQuiz,
  getAllQuiz,
  getSingleQuiz,
  updateQuiz,
  deleteQuiz
} from '../../controllers/quiz/quiz';

const router = express.Router();

router.route('/')
  .post(createQuiz)
  .get(getAllQuiz)


router.route('/:id')
  .patch(updateQuiz)
  .get(getSingleQuiz)
  .delete(deleteQuiz)


export const quizRouter = router;