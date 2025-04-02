import { useContext } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { CardContext } from '../context/card-context';
import { ArrStatus, URLStatusValues } from '../types/data.types';
import { Card } from './card';

const statusData: ArrStatus[] = ['all', 'active', 'inactive'];

const Main = () => {
	const { data } = useContext(CardContext);
	const { pathname } = useLocation();
	const typedPathName = pathname as URLStatusValues;

	return (
		<main className='mt-14 w-full max-w-[150rem]'>
			<div className='grid grid-cols-1 items-end gap-4 md:grid-cols-2 dark:text-(--Neutral-100)'>
				<h1 className='text-center text-4xl font-bold text-(--Neutral-900) md:text-left lg:text-5xl dark:text-(--Neutral-0)'>
					Extensions List
				</h1>
				<div className='flex justify-center gap-4 md:justify-end'>
					{statusData.map((el) => (
						<NavLink
							to={
								el === 'all'
									? '/browser-extensions-manager-ui-main/'
									: `/browser-extensions-manager-ui-main/${el}`
							}
							end={el === 'all'}
							key={el}
							className={({ isActive }) => {
								console.log({ el, isActive });
								return `size-fit cursor-pointer rounded-[1.4rem] px-5 py-1 text-xl capitalize ${
									isActive
										? 'bg-(--Red-500) font-[500] text-(--Neutral-100) hover:bg-(--Red-700) dark:text-(--Neutral-900)'
										: 'bg-(--Neutral-0) text-(--Neutral-600) shadow-[0px_0px_4px_-2px_rgba(0,_0,_0,_0.7)] hover:bg-(--Neutral-100) dark:bg-(--Neutral-700) dark:text-(--Neutral-300) dark:shadow-[0px_0px_1px_0.5px_rgba(255,_255,_255,_0.6)] dark:hover:bg-(--Neutral-600)'
								}`;
							}}
						>
							{el}
						</NavLink>
					))}
				</div>
			</div>
			<div className='mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3'>
				{typedPathName == '/browser-extensions-manager-ui-main/' ? (
					data.map((item) => (
						<Card
							key={item.name}
							{...item}
						/>
					))
				) : (
					<Outlet />
				)}
			</div>
		</main>
	);
};

export default Main;
