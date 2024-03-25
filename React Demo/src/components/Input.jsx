import { useState } from 'react';

export default function Input({ onAddTodo }) {
	const [todo, setTodo] = useState('');

	function handleAdd() {
		if (todo === '') {
			return;
		}

		onAddTodo(todo);
		setTodo('');
	}

	return (
		<section id='todo-input'>
			<input
				type='text'
				value={todo}
				onChange={(e) => setTodo(e.target.value)}
			/>
			<button className='btn' onClick={handleAdd}>
				Add Todo
			</button>
		</section>
	);
}
