import React, { createContext, useState, useEffect } from 'react';
import api from '../services/api';
import handleError from '../pages/utils/Error';

export const TodoListContext = createContext();

const TodoListContextProvider = (props) => {
	const [todo, setTodo] = useState([]);
	const [editModeState, setEditModeState] = useState({
		editMode: false,
		todo: {}
	});

	const [editTodo, setEditTodo] = useState(null);

	useEffect(() => {
		async function loadTodo() {
			const response = await api.get('/todos');
			setTodo(response.data);
		}
		loadTodo();
	}, [todo]);

	async function addTodo(content) {
		if (
			todo
				.map((todo) => todo.content.toLowerCase())
				.some((todo) => todo === content.toLowerCase())
		) {
			handleError();
		} else {
			const response = await api.post('/todos/create', { content });
			setTodo([...todo, response.data]);
		}
	}

	async function removeTodo(id) {
		await api.delete(`/todos/destroy/${id}`);

		setTodo(todo.filter((todo) => todo._id !== id));
	}

	const findTodo = (todo) => {
		setEditModeState({
			editMode: todo !== editModeState.todo ? true : false,
			todo
		});

		setEditTodo(todo);
	};

	const editContent = async (content) => {
		if (
			todo
				.map((todo) => todo.content.toLowerCase())
				.some((todo) => todo === content.toLowerCase())
		) {
			handleError();
		} else {
			if (
				todo
					.map((todo) => todo)
					.some((todo) => todo._id === editModeState.todo._id)
			) {
				await api.put(`/todos/update/${editModeState.todo._id}`, { content });
				setEditModeState({ editMode: false, todo: {} });
			}
		}
	};

	const checkTodo = async (id) => {
		await api.put(`/todos/done/${id}`);
	};

	return (
		<TodoListContext.Provider
			value={{
				todo,
				editModeState,
				addTodo,
				removeTodo,
				findTodo,
				editContent,
				editTodo,
				checkTodo
			}}
		>
			{props.children}
		</TodoListContext.Provider>
	);
};

export default TodoListContextProvider;
