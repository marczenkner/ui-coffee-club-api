import { Router } from 'express';
import * as CoffeeController from './controller';

const routes = new Router();

routes.post('/create-coffee', CoffeeController.createCoffee);

export default routes;

