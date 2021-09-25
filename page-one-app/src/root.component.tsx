import './root.component.css';
import UserContextProvider from './context/UserContext';

export default function Root(props) {
	const signInGoogle = async () => {
		window.open('http://localhost:5000/api/users/auth/google', '_self');
	};
	return (
		<UserContextProvider>
			<div className='page-one-app'>
				<button onClick={signInGoogle}>Google SignIn</button>
			</div>
		</UserContextProvider>
	);
}
