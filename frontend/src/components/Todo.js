import React, { useContext } from 'react';
import { TodoListContext } from '../context/TodoListContext';
import { FaCheck, FaPen, FaTimes } from 'react-icons/fa';
import List from '../style/Todo';

const Todo = ({ todo }) => {
	const { removeTodo, findTodo, checkTodo } = useContext(TodoListContext);

	return (
		<List key={todo._id}>
			<button onClick={(e) => checkTodo(todo._id)}>
				<FaCheck className={todo.status === 0 ? 'button-done' : ''} size={21} />
			</button>
			<p className={todo.status === 0 ? 'p-done' : ''}>{todo.content}</p>
			<div className="icons">
				<button onClick={(e) => findTodo(todo)} className="edit">
					<FaPen size={18} />
				</button>
				<button onClick={(e) => removeTodo(todo._id)} className="delete">
					<FaTimes size={18} />
				</button>
			</div>
		</List>
	);
};

export default Todo;
