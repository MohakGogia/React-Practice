export default function GameOver({winner, onRematch}) {
    return (
        <div id="game-over">
            <h2>Game Over!</h2>
            {winner ? <h3>{winner} wins!</h3> : <h3>It's a draw!</h3>}
            <button onClick={onRematch}>Rematch</button>
        </div>
    );
}