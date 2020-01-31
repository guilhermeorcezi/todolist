const { Router } = require('express');
const TodoController = require('./controllers/TodoController');

const routes = Router();

routes.post('/todos/create',TodoController.store);
routes.get('/todos',TodoController.index);

module.exports = routes;
