import { useState } from 'react';

export default function ({ player, isActivePlayer, onNameChange }) {
	const [isEditing, setIsEditing] = useState(false);
	const [playerName, setPlayerName] = useState(player.name);

	function handleNameChange(event) {
		setPlayerName(event.target.value);
	}

	function handleClick() {
		setIsEditing((editing) => !editing);

		if (isEditing) {
			onNameChange(player.symbol, playerName);
		}
	}

	return (
		<li className={isActivePlayer ? 'active' : ''}>
			<span className='player'>
				{isEditing ? (
					<input
						type='text'
						required
						value={playerName}
						onChange={handleNameChange}
					/>
				) : (
					<span className='player-name'>{playerName}</span>
				)}
				<span className='player-symbol'>{player.symbol}</span>
			</span>
			<button onClick={handleClick}>{isEditing ? 'Save' : 'Edit'}</button>
		</li>
	);
}
