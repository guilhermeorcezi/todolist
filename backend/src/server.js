const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes');

require('dotenv').config();

mongoose.connect(process.env.MONGO_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: true
});

const server = express();

server.use(cors());
server.use(express.json());
server.use(routes);
server.listen(3333);
