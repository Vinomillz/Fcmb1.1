import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignUp } from "./pages/signUp/signUp";
import { SignIn } from "./pages/signIn/signIn";

function App() {
	return (
		<>
			<div className='App'>
				<Router>
					<Routes>
						<Route path='/' element={<SignUp />}></Route>
						<Route path='/signIn' element={<SignIn />}></Route>
					</Routes>
				</Router>
			</div>
		</>
	);
}

export default App;
