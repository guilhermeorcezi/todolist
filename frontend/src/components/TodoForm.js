import React, { useContext, useState, useEffect } from 'react';
import Form from '../style/TodoForm';
import { FaPlus, FaCheck } from 'react-icons/fa';
import { TodoListContext } from '../context/TodoListContext';

const TodoForm = () => {
	const { addTodo, editTodo, editContent, editModeState } = useContext(
		TodoListContext
	);
	const [content, setContent] = useState('');

	useEffect(() => {
		if (editModeState.editMode) {
			setContent(editTodo.content);
		} else {
			setContent('');
		}
	}, [editModeState.editMode, editTodo]);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (editModeState.editMode) {
			editContent(content);
		} else {
			addTodo(content);
			setContent('');
		}
	};

	return (
		<Form onSubmit={handleSubmit}>
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
		</Form>
	);
};

export default TodoForm;
