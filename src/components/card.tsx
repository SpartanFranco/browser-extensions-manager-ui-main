import { AnimatePresence } from 'motion/react';
import * as motion from 'motion/react-client';
import { useContext } from 'react';
import { CardContext } from '../context/card-context';
import { Data } from '../types/data.types';
import ButtonActiveCard from './buttons/button-active-card';
import { ButtonRemove } from './buttons/button-remove';

export const Card = ({ description, isActive, logo, name }: Data) => {
	const { data, setData } = useContext(CardContext);

	const removeItem = () => setData(data.filter((el) => el.name !== name));

	const urlLogo = logo.split('/').splice(2).join('/');

	return (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				exit={{ opacity: 0, scale: 0 }}
				layout
				transition={{ duration: 0.2, ease: 'easeInOut' }}
				className='grid min-h-[12rem] gap-8 rounded-2xl bg-(--Neutral-0) px-8 py-6 shadow-[0px_0px_4px_-2px_rgba(0,_0,_0,_0.7)] dark:bg-(--Neutral-800) dark:shadow-[0px_0px_1px_0.5px_rgba(255,_255,_255,_0.6)]'
			>
				<div className='flex gap-6'>
					<img
						src={`/browser-extensions-manager-ui-main/${urlLogo}`}
						alt={name + '-logo'}
						className='size-[50px]'
					/>
					<section className='grid'>
						<h2 className='text-xl font-[700] text-(--Neutral-900) dark:text-(--Neutral-100)'>
							{name}
						</h2>
						<p className='font-[400] text-(--Neutral-600) dark:text-(--Neutral-300)'>
							{description}
						</p>
					</section>
				</div>
				<div className='flex items-end justify-between'>
					<ButtonRemove removeItem={removeItem} />
					<ButtonActiveCard
						isActive={isActive}
						name={name}
					/>
				</div>
			</motion.div>
		</AnimatePresence>
	);
};
