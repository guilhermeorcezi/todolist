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
	const [editModeState, setEditModeState] = useState({
		editMode: false,
		todo: {}
	});

	useEffect(() => {
		async function loadTodo() {
			const response = await api.get('/todos');
			setTodo(response.data);
		}
		loadTodo();
	}, [todo]);

	useEffect(() => {
		if (editModeState.editMode) setContent(editModeState.todo.content);
	}, [editModeState.editMode, editModeState.todo]);

	async function handleSubmit(e) {
		e.preventDefault();

		if (editModeState.editMode) {
			if (
				todo
					.map((todo) => todo.content.toLowerCase())
					.some((todo) => todo === content.toLowerCase())
			) {
				setContent('');
				handleError();
			} else {
				if (
					todo
						.map((todo) => todo)
						.some((todo) => todo._id === editModeState.todo._id)
				) {
					await api.put(`/todos/update/${editModeState.todo._id}`, { content });
				}
			}
		} else {
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
	}

	async function handleDelete(id) {
		await api.delete(`/todos/destroy/${id}`);

		setTodo(todo.filter((todo) => todo._id !== id));
	}

	function handleEdit(todo) {
		setEditModeState({
			editMode: todo !== editModeState.todo ? true : false,
			todo
		});
	}

	async function handleChecked(id) {
		await api.put(`/todos/done/${id}`);
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
							{editModeState.editMode ? (
								<FaCheck color="#FFF" size={14} />
							) : (
								<FaPlus color="#FFF" size={14} />
							)}
						</button>
					</form>

					<ul>
						{todo.map((item) => (
							<li key={item._id}>
								<button onClick={(e) => handleChecked(item._id)}>
									<FaCheck
										className={item.status === 0 ? 'button-done' : ''}
										size={21}
									/>
								</button>
								<p className={item.status === 0 ? 'p-done' : ''}>
									{item.content}
								</p>
								<div className="icons">
									<button onClick={(e) => handleEdit(item)} className="edit">
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
