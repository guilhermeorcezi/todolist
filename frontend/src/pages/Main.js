import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import Container from '../components/container';
import { FaPlus, FaCheck, FaPen, FaTimes } from 'react-icons/fa';
import api from '../services/api';
import { ToastContainer } from 'react-toastify';
import handleError from './utils/Error';

export default function Main() {
	const [content, setContent] = useState([]);
	const [todo, setTodo] = useState([]);
	const editModeState = useState({editMode:false, todo:{}})
	const [{editMode}] = editModeState();

	useEffect(() => {
		async function loadTodo() {
			const response = await api.get('/todos');
			setTodo(response.data);
		}
		loadTodo();
	}, []);

	async function handleSubmit(e) {
		e.preventDefault();

		if (
			todo
				.map((todo) => todo.content.toLowerCase())
				.some((todo) => todo === content.toLowerCase())
		) {
			setContent('');
			handleError();
		} else {
			const response = await api.post('/todos/create', { content });
			setTodo([...todo, response.data]);

			setContent('');
		}
	}

	async function handleDelete(id) {
		await api.delete(`/todos/destroy/${id}`);

		setTodo(todo.filter((todo) => todo._id !== id));
	}

	async function handleEdit(){
		
	}

	return (
		<>
			<ToastContainer />
			<Header>
				<strong>ToDo List</strong>
			</Header>
			<Container>
				<div>
					<form onSubmit={handleSubmit}>
						<input
							type="text"
							placeholder="Novo Item"
							value={content}
							required
							onChange={(e) => setContent(e.target.value)}
						/>
						<button>
							<FaPlus color="#FFF" size={14} />
						</button>
					</form>

					<ul>
						{todo.map((item) => (
							<li key={item._id}>
								<button>
									<FaCheck size={21} />
								</button>
								<p>{item.content}</p>
								<div onClick={(e) => handleEdit(item._id)} className="icons">
									<button className="edit">
										<FaPen size={18} />
									</button>
									<button
										onClick={(e) => handleDelete(item._id)}
										className="delete"
									>
										<FaTimes size={18} />
									</button>
								</div>
							</li>
						))}
					</ul>
				</div>
			</Container>
		</>
	);
}
