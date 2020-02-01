const { Router } = require('express');
const TodoController = require('./controllers/TodoController');

const routes = Router();

routes.post('/todos/create',TodoController.store);
routes.get('/todos',TodoController.index);
routes.delete('/todos/destroy/:id',TodoController.destroy);
routes.put('/todos/update/:id',TodoController.update);

module.exports = routes;
