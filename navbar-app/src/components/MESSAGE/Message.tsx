import React from 'react';
import './message.css';

import ProfilePic from '../../assets/images.png';

interface Props {
	own?: string;
}

const Message = (props: Props) => {
	const { own } = props;
	return (
		<div className={own ? 'message own' : 'message'}>
			<div className='messageTop'>
				<img className='messageImg' src={ProfilePic} alt='messageImg' />

				<p className='messageText'>
					{' '}
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae beatae
					asperiores obcaecati nostrum corrupti totam nisi! Aliquid voluptatibus
					exercitationem voluptas!
				</p>
			</div>
			<div className='messageBottom'>1 hour ago</div>
		</div>
	);
};

export default Message;
