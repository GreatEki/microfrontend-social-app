import React from 'react';
import './messenger.css';

import Conversations from '../../components/CONVERSATIONS/Conversations';
import Message from '../../components/MESSAGE/Message';
import ChatOnline from '../../components/CHATONLINE/ChatOnline';

const Landing = () => {
	return (
		<div className='messenger'>
			<div className='chatMenu'>
				<div className='chatMenuWrapper'>
					<input
						type='text'
						placeholder='Search for friends'
						className='chat__search'
					/>

					<Conversations name='Toke Makinwa' />
					<Conversations name='Jane Doe' />
					<Conversations name='Binta Lowe' />
				</div>
			</div>
			<div className='chatBox'>
				<div className='chatBoxWrapper'>
					<div className='chatBoxTop'>
						<Message own='own' />
						<Message />
						<Message />
						<Message />
						<Message />
						<Message own='own' />
						<Message own='own' />
						<Message own='own' />
					</div>
					<div className='chatBoxBottom'>
						<textarea
							className='chat__message__input'
							placeholder='Write something here'></textarea>

						<button className='chat__submit__btn'>Send</button>
					</div>
				</div>
			</div>
			<div className='chatOnline'>
				<div className='chatOnlineWrapper'>
					<ChatOnline name='John Doe' />
					<ChatOnline name='Obicode' />
					<ChatOnline name='Hack Sultan' />
					<ChatOnline name='Brad Traversy' />
				</div>
			</div>
		</div>
	);
};

export default Landing;
