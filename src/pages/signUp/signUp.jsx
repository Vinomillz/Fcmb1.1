import "./signUp.css";
import { Link } from "react-router-dom";
export const SignUp = () => {
	return (
		<div>
			<div className='container'>
				<div className='heading'>
					<h2>Fast. Easy. </h2>
					<h2>Loans Your way.</h2>
					<span>Get a loan in 3 easy steps...</span>
				</div>
				<div className='Inputs'>
					<div className='input'>
						<input type='email' placeholder='Email address' />
					</div>
					<div className='input'>
						<input type='text' placeholder='Username' />
					</div>
					<div className='input'>
						<input type='text' placeholder='phone number' />
					</div>
					<div className='input'>
						<input type='password' placeholder='Password' />
					</div>
					<Link to='/signIn'>
						<button className='signIn'>Sign Up</button>
					</Link>

					<span>
						By creating an account you agree with our Terms of use and Privacy
						Policy
					</span>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
