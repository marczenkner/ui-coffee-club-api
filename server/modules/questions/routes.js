import { Router } from 'express';
import { createQuestion, getQuestions, editQuestion, deleteQuestion } from './controller';

const questionRoutes = new Router();

questionRoutes.get('/get-questions', getQuestions);

questionRoutes.post('/create-question', createQuestion);

questionRoutes.post('/edit-question', editQuestion);

questionRoutes.delete('/delete-question', deleteQuestion);

export default questionRoutes;

