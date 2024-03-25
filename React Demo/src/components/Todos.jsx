export default function Todos({ todos, onDelete }) {
	return (
		<section id='todos-container'>
			{todos.length !== 0 ? (
				<ul>
					{todos?.map((todo, index) => (
						<li key={index} className='todo-item'>
                            <span>{index + 1}.</span>
							<span>{todo}</span>
							<button className='btn btn-danger' onClick={() => onDelete(todo)}>
								Delete
							</button>
						</li>
					))}
				</ul>
			) : (
				<p>No todos yet</p>
			)}
		</section>
	);
}
