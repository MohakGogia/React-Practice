import { useState } from 'react';

import GameBoard from './components/GameBoard';
import GameOver from './components/GameOver';
import Player from './components/Player';
import Log from './components/Log';
import { WINNING_COMBINATIONS } from './Winning-combinations';

const PLAYERS = {
	X : 'Player 1',
	O : 'Player 2'
};
const INITIAL_GAME_BOARD = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];
const MAX_POSSIBLE_TURNS = 9;

function deriveActivePlayerSymbol(gameTurns) {
	let currentPlayerSymbol = 'X';

	if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
		currentPlayerSymbol = 'O';
	}

	return currentPlayerSymbol;
}

function deriveGameBoard(gameTurns) {
	let gameBoard = [...INITIAL_GAME_BOARD.map(arr => [...arr])];

	for (const turn of gameTurns) {
		const { square, player } = turn;
		gameBoard[square.row][square.col] = player;
	}

	return gameBoard;
}

function deriveWinner(gameBoard, players) {
	let winner;

	for (const combination of WINNING_COMBINATIONS) {
		const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
		const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
		const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

		if (
			firstSquareSymbol &&
			firstSquareSymbol === secondSquareSymbol &&
			firstSquareSymbol === thirdSquareSymbol
		) {
			winner = players[firstSquareSymbol];
		}
	}

	return winner;
}

function App() {
	const [players, setPlayers] = useState(PLAYERS);
	const [gameTurns, setGameTurns] = useState([]);

	const activePlayerSymbol = deriveActivePlayerSymbol(gameTurns);
	const gameBoard = deriveGameBoard(gameTurns);
	const winner = deriveWinner(gameBoard, players);

	const hasDrawn = (gameTurns.length === MAX_POSSIBLE_TURNS && !winner);

	function handlePlayerSymbolChange(rowIndex, colIndex) {
		setGameTurns((prevTurns) => {
			const currentPlayerSymbol = deriveActivePlayerSymbol(prevTurns);

			const updatedTurns = [
				{
					square: { row: rowIndex, col: colIndex },
					player: currentPlayerSymbol,
				},
				...prevTurns,
			];

			return updatedTurns;
		});
	}

	function handleRematch() {
		setGameTurns([]);
	}

	function handlePlayerNameChange(symbol, newName) {
		setPlayers(prevPlayers => {
			return {
				...prevPlayers,
				[symbol]: newName
			}
		});
	}

	return (
		<main>
			<div id='game-container'>
				<ol id='players' className='highlight-player'>
					<Player
						player={{ name: PLAYERS.X, symbol: 'X' }}
						isActivePlayer={activePlayerSymbol === 'X'}
						onNameChange={handlePlayerNameChange}
					/>
					<Player
						player={{ name: PLAYERS.O, symbol: 'O' }}
						isActivePlayer={activePlayerSymbol === 'O'}
						onNameChange={handlePlayerNameChange}
					/>
				</ol>
				{(winner || hasDrawn) && <GameOver winner={winner} onRematch={handleRematch}/>}
				<GameBoard
					onPlayerSymbolChange={handlePlayerSymbolChange}
					board={gameBoard}
				/>
			</div>
			<Log turns={gameTurns} />
		</main>
	);
}

export default App;
