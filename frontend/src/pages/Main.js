import React from 'react';
import Header from '../components/Header';
import Container from '../components/Container';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import TodoListContextProvider from '../context/TodoListContext';

import { ToastContainer } from 'react-toastify';
//import handleError from './utils/Error';

export default function Main() {
	return (
		<>
			<TodoListContextProvider>
				<ToastContainer />
				<Header>
					<strong>ToDo List</strong>
				</Header>
				<Container>
					<div>
						<TodoForm />
						<TodoList />
					</div>
				</Container>
			</TodoListContextProvider>
		</>
	);
}
