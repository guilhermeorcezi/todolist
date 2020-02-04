import { useContext } from 'react';
import { TodoContext } from '../Main';

export default function Validate() {
	const [todo, setTodo] = useContext(TodoContext);
    return console.log(todo);
	//return todo.map((todo) => todo.content.toLowerCase()).some((todo) => todo === content.toLowerCase());
}
