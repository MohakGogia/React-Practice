import { useState } from 'react';
import './App.css';
import Todos from './components/Todos';
import Input from './components/Input';

function App() {
	const [todos, setTodos] = useState([]);

	function onAddTodo(todo) {
		if (todos.find((t) => t === todo)) {
			return;
		}

		setTodos((prevState) => {
			return [...prevState, todo];
		});
	}

	function onDelete(todo) {
		setTodos((prevState) => {
			return prevState.filter((t) => t !== todo);
		});
	}

	return (
		<div className='App'>
			<h1>TODO App</h1>
			<Input onAddTodo={onAddTodo} />
			<Todos todos={todos} onDelete={onDelete} />
		</div>
	);
}

export default App;
