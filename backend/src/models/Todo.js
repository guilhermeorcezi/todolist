const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema({
    content: String,
    status: Number
});

module.exports = mongoose.model('Todo',TodoSchema);