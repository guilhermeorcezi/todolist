const Todo = require('../models/Todo');

module.exports = {
	async store(req, res) {
		const { content } = req.body;

		const todo = await Todo.create({
			content,
			status: 1
		});

		return res.json(todo);
	},

	async index(req, res) {
		const todos = await Todo.find();

		return res.json(todos);
	},

	async destroy(req, res) {
		const { id } = req.params;

		const todo = await Todo.findById(id).deleteOne();

		return res.json(todo);
	},

	async update(req, res) {
		const { id } = req.params;
		const { content } = req.body;

		const todo = await Todo.findById(id);

		const newTodo = await Todo.updateOne(todo, {
			content: content
		});

		return res.json(newTodo);
	}
};
