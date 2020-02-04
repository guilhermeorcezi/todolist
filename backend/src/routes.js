const { Router } = require('express');
const TodoController = require('./controllers/TodoController');

const routes = Router();

routes.post('/todos/create',TodoController.store);
routes.get('/todos',TodoController.index);
routes.get('/todos/:id',TodoController.read);
routes.delete('/todos/destroy/:id',TodoController.destroy);
routes.put('/todos/update/:id',TodoController.update);
routes.put('/todos/done/:id',TodoController.updateStatus);

module.exports = routes;
