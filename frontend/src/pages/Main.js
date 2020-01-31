import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import Container from '../components/container';
import { FaPlus } from 'react-icons/fa';

export default function Main() {
	const [todo, setTodo] = useState([]);

	useEffect(() => {
    }, []);

	function handleSubmit(e) {
		e.preventDefault();
	}

	return (
		<>
			<Header>
				<strong>ToDo List</strong>
			</Header>
			<Container>
				<div>
					<form onSubmit={handleSubmit}>
						<input
							type="text"
							placeholder="Novo Item"
							value={todo}
							onChange={(e) => setTodo(e.target.value)}
						/>
						<button>
							<FaPlus color="#FFF" size={14} />
						</button>
					</form>

					<ul>
						<li>
							<p>Estudar Node</p>
						</li>
						<li>
							<p>Estudar React</p>
						</li>
					</ul>
				</div>
			</Container>
		</>
	);
}
