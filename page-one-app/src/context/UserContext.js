import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const UserContext = createContext();

const UserContextProvider = (props) => {
	const [userObject, setUserObject] = useState({});

	useEffect(() => {
		(async () => {
			const res = await axios.get('http://localhost:5000/api/users/getUser', {
				withCredentials: true,
			});

			console.log(res);
			setUserObject(res.data);
		})();
	}, []);

	return (
		<UserContext.Provider value={{ userObject }}>
			{props.children}
		</UserContext.Provider>
	);
};

export default UserContextProvider;
