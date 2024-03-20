import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

const ResultDialog = forwardRef(function ResultDialog(
	{ targetTime, timeRemaining, onReset },
	ref
) {
	const dialogRef = useRef();

	const isDefeat = timeRemaining <= 0;
	const formattedTime = (timeRemaining / 1000).toFixed(2);
	const score = Math.round((1 - timeRemaining / (targetTime * 1000)) * 100);

	useImperativeHandle(ref, () => {
		return {
			open() {
				dialogRef.current.showModal();
			},
		};
	});

	return createPortal(
		<dialog ref={dialogRef} className='result-modal' onClose={onReset}>
			{isDefeat ? <h2>You Lost!</h2> : <h2>Your score: {score}</h2>}
			<p>
				The target time was <strong>{targetTime} seconds.</strong>
			</p>
			<p>
				You stopped the timer with{' '}
				<strong>{formattedTime} seconds left.</strong>
			</p>
			<form method='dialog' onSubmit={onReset}>
				<button>Close</button>
			</form>
		</dialog>,
		document.getElementById('modal')
	);
});

export default ResultDialog;
