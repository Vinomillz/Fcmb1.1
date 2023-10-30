import "./signIn.css";

export const SignIn = () => {
	return (
		<div className='container'>
			<div className='heading'>
				<h2>Welcome back !</h2>
				<span>Please fill in your details</span>
			</div>
			<div className='Inputs'>
				<div className='input'>
					<input type='text' placeholder='phone number' />
				</div>
				<div className='input'>
					<input type='password' placeholder='Password' />
				</div>
				<button className='signIn'>Sign in</button>
				<button className='Signup'>
					<span className='line'></span>
					<p>Sign up</p> <span className='line'></span>
				</button>
			</div>
		</div>
	);
};

export default SignIn;
