import './conversations.css';
import TokeMakinwa from '../../assets/toke.jpg';

interface Props {
	name: string;
}

const Conversations = (props: Props) => {
	const { name } = props;
	return (
		<div className='conversation'>
			<img
				className='conversationImg'
				src={TokeMakinwa}
				alt='conversationImg'
			/>
			<span className='conversationName'> {name} </span>
		</div>
	);
};

export default Conversations;
