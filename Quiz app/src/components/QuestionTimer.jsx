import { useState, useEffect } from 'react';

export default function QuestionTimer({ timeout, onTimeOut }) {
	const [remainingTime, setRemainingTime] = useState(timeout);

	useEffect(() => {
		const timer = setTimeout(onTimeOut, timeout);

		return () => {
			clearInterval(timer);
		};
	}, [timeout, onTimeOut]);

	useEffect(() => {
		const interval = setInterval(() => {
			setRemainingTime((prevTime) => prevTime - 100);
		}, 100);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return <progress id='question-time' value={remainingTime} max={timeout} />;
}
