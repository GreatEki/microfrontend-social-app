import './root.component.css';
import axios from 'axios';

export default function Root(props) {
	const signInGoogle = async () => {
		window.open('http://localhost:5000/api/users/auth/google', '_self');
	};
	return (
		<div className='page-one-app'>
			<button onClick={signInGoogle}>Google SignIn</button>
		</div>
	);
}
