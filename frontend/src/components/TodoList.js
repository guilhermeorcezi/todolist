import React, { useContext } from 'react';
import { TodoListContext } from '../context/TodoListContext';
import Todo from './Todo';

const TodoList = () => {
	const { todo } = useContext(TodoListContext);
	return todo.length ? (
		<ul>
			{todo.map((item) => {
				return <Todo todo={item} key={item._id} />;
			})}
		</ul>
	) : (
		<div className="empty-list"></div>
	);
};

export default TodoList;
