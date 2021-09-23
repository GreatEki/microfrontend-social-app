import './navbar.css';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { AiFillBell } from 'react-icons/ai';

import ProfilePic from '../../assets/images.png';

const Navbar = () => {
	return (
		<nav id='navBar'>
			<div className='logo__box'>Ekenesocial</div>

			<div className='search__container'>
				<input
					type='search'
					className='search__input'
					placeholder='search for post here...'
				/>
			</div>

			<div className='others__container'>
				<div className='page__nav'>
					<Link to='#'> Homepage </Link>
					<Link to='#'> Timeline </Link>
				</div>

				<div className='icons__nav'>
					<FaUser />

					<BiMessageSquareDetail />

					<AiFillBell />
				</div>

				<div className='profile__container'>
					<img src={ProfilePic} alt='profile' className='profile__img' />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
