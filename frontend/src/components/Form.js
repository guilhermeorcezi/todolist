import React, { useContext, useState } from 'react';
import { editModeContext } from '../pages/Main';
import { FaPlus, FaCheck, FaPen, FaTimes } from 'react-icons/fa';

export default function Form() {
    const [content, setContent] = useState([]);
    const [editModeState, setEditModeState] = useContext(editModeContext);
    
    
    async function handleSubmit(e) {
		e.preventDefault();
		Validate();
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
					setContent('');
					setEditModeState({ editMode: false, todo: {} });
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

	return (<form onSubmit={handleSubmit}>
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
    </form>);
}
