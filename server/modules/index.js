import { Router } from 'express';
import { createSection, getSections, editSection, deleteSection } from './sections/controller';
import { createQuestion, getQuestions, editQuestion, deleteQuestion } from './questions/controller';

const routes = new Router();

routes.get('/get-sections', getSections);

routes.post('/create-section', createSection);

routes.patch('/edit-section', editSection);

routes.delete('/delete-section', deleteSection);


routes.get('/get-questions', getQuestions);

routes.post('/create-question', createQuestion);

routes.patch('/edit-question', editQuestion);

routes.delete('/delete-question', deleteQuestion);

export { routes };

