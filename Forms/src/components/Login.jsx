import { useInput } from '../hooks/useInput';
import { isEmail, isNotEmpty } from '../util/validation';

export default function Login() {
	const {
		value: email,
		handleInputChange: handleEmailChange,
		handleInputBlur: handleEmailBlur,
		hasError: emailHasError,
	} = useInput('', isEmail);

	const {
		value: password,
		handleInputChange: handlePasswordChange,
		handleInputBlur: handlePasswordBlur,
		hasError: passwordHasError,
	} = useInput('', isNotEmpty);

	function handleSubmit(event) {
		event.preventDefault();

		if (emailHasError || passwordHasError) {
			console.log('Either email or password has an error');
			return;
		}

		console.log(email, password);
		alert('Form submitted');
	}

	return (
		<form onSubmit={handleSubmit}>
			<h2>Login</h2>

			<div className='control-row'>
				<div className='control no-margin'>
					<label htmlFor='email'>Email</label>
					<input
						id='email'
						type='email'
						name='email'
						onBlur={handleEmailBlur}
						onChange={handleEmailChange}
						value={email}
					/>
					<div className='control-error'>
						<p>{emailHasError && 'Please enter a valid email'}</p>
					</div>
				</div>

				<div className='control no-margin'>
					<label htmlFor='password'>Password</label>
					<input
						id='password'
						type='password'
						name='password'
						onBlur={handlePasswordBlur}
						onChange={handlePasswordChange}
						value={password}
					/>
					<div className='control-error'>
						<p>
							{passwordHasError &&
								'Please enter password with at least 6 characters'}
						</p>
					</div>
				</div>
			</div>

			<p className='form-actions'>
				<button type='reset' className='button button-flat'>Reset</button>
				<button type='submit' className='button'>Login</button>
			</p>
		</form>
	);
}
