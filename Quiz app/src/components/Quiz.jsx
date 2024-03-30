import { useState, useCallback, useRef } from 'react';
import QUESTIONS from '../questions';
import QuestionTimer from './QuestionTimer';
import Answers from './Answers';
import Summary from './Summary';

export default function Quiz() {
	const [answerState, setAnswerState] = useState('');
	const [userAnswers, setUseAnswers] = useState([]);

	const activeQuestionIndex =
		answerState === '' ? userAnswers.length : userAnswers.length - 1;

	const isQuizCompleted = activeQuestionIndex === QUESTIONS.length;

	const handleSelectAnswer = useCallback(
		function handleSelectAnswer(answer) {
			setAnswerState('answered');
			setUseAnswers((prevAnswers) => {
				return [...prevAnswers, answer];
			});

			setTimeout(() => {
				if (answer === QUESTIONS[activeQuestionIndex].answers[0]) {
					setAnswerState('correct');
				} else {
					setAnswerState('wrong');
				}

				setTimeout(() => {
					setAnswerState('');
				}, 2000);
			}, 1000);
		},
		[activeQuestionIndex]
	);

	const handleSkipAnswer = useCallback(
		() => handleSelectAnswer(null),
		[handleSelectAnswer]
	);

	return (
		<>
			{isQuizCompleted ? (
				<Summary userAnswers={userAnswers} />
			) : (
				<div id='quiz'>
					<div id='question'>
						<QuestionTimer
							key={activeQuestionIndex}
							timeout={10000}
							onTimeOut={handleSkipAnswer}
						/>
						<h2>{QUESTIONS[activeQuestionIndex].text}</h2>
						<Answers
							key={Math.random()}
							answers={QUESTIONS[activeQuestionIndex].answers}
							selectedAnswer={userAnswers[userAnswers.length - 1]}
							answerState={answerState}
							onSelect={handleSelectAnswer}
						/>
					</div>
				</div>
			)}
		</>
	);
}
