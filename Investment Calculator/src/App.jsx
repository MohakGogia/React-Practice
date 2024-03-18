import { useState } from 'react';

import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from './components/Results';

function App() {
  const [userInput, setUserInput] = useState({
		initialInvestment: 1000,
		annualInvestment: 12000,
		expectedReturn: 8,
		duration: 10,
	});

  const isInputValid = userInput.duration > 0;

  function handleUserInput(inputIdentifier, value) {
		setUserInput((prevState) => {
			return {
				...prevState,
				[inputIdentifier]: parseInt(value),
			};
		});
	}

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleUserInput} />
      {isInputValid ? <Results userInput={userInput} /> : 
        <p className='center'>Duration should be greater than 0</p> }
    </>
  )
}

export default App
