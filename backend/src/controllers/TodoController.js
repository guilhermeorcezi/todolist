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
    }
};
