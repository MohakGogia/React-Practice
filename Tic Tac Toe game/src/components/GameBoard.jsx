export default function GameBoard({ onPlayerSymbolChange, board }) {
	return (
		<ol id='game-board'>
			{board.map((row, rowIndex) => (
				<li key={rowIndex}>
					<ol>
						{row.map((playerSymbol, colIndex) => (
							<li key={colIndex}>
								<button
									onClick={() => onPlayerSymbolChange(rowIndex, colIndex)}
									disabled={playerSymbol !== null}>
									{playerSymbol}
								</button>
							</li>
						))}
					</ol>
				</li>
			))}
		</ol>
	);
}
