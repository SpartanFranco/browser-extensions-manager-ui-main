import * as motion from 'motion/react-client';
import React, { useContext } from 'react';
import { CardContext } from '../../context/card-context';

interface Props {
	isActive: boolean;
	name: string;
}

export default function ButtonActiveCard({ isActive, name }: Props) {
	const [isOn, setIsOn] = React.useState(isActive);
	const { setCardActive } = useContext(CardContext);
	const toggleSwitch = () => {
		setIsOn(!isOn);
		setCardActive({ name, isActive });
	};

	return (
		<button
			aria-label='Toggle activate or inactivate item'
			className={`flex h-[22px] w-[40px] cursor-pointer items-center rounded-full p-[3px] ${
				!isOn
					? 'justify-start bg-(--Neutral-300) dark:bg-(--Neutral-600)'
					: 'justify-end bg-(--Red-700) dark:bg-(--Red-500)'
			}`}
			onClick={toggleSwitch}
		>
			<motion.div
				className='size-[17px] rounded-full bg-white'
				layout
				transition={{
					type: 'spring',
					visualDuration: 0.2,
					bounce: 0.2,
				}}
			/>
		</button>
	);
}
