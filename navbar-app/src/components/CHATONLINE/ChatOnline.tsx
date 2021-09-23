import React from 'react';

import ProfilePic from '../../assets/images.png';

import './chatOnline.css';

interface Props {
	name: string;
}

const ChatOnline = (props: Props) => {
	const { name } = props;
	return (
		<div className='chatOnline'>
			<div className='chat__online__friend'>
				<div className='chat__online__img__container'>
					<img
						className='chat__online__img'
						src={ProfilePic}
						alt='chatOnlineImg'
					/>
					<div className='chat__online__badge'></div>
				</div>

				<span className='chat__online__name'>{name}</span>
			</div>
		</div>
	);
};

export default ChatOnline;
