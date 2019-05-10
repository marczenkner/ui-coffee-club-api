import { Router } from 'express';
import * as CoffeeController from './controller';

const routes = new Router();

routes.post('/create-coffee', CoffeeController.createCoffee);

routes.get('/get-questions', CoffeeController.getCoffees);

export default routes;

