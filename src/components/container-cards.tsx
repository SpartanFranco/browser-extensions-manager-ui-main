import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CardContext } from '../context/card-context';
import { Data, URLStatusValues } from '../types/data.types';
import { Card } from './card';

export const ContainerCards = () => {
	const [dataFiltered, setDataFiltered] = useState<Data[]>([]);
	const { data } = useContext(CardContext);
	const { pathname } = useLocation();
	const typedPathname = pathname as URLStatusValues;

	useEffect(() => {
		if (typedPathname == '/browser-extensions-manager-ui-main/active')
			setDataFiltered(data.filter((i) => i.isActive));

		if (typedPathname == '/browser-extensions-manager-ui-main/inactive')
			setDataFiltered(data.filter((i) => !i.isActive));
	}, [data, typedPathname]);
	return (
		<>
			{dataFiltered.map((item) => (
				<Card
					key={item.name}
					{...item}
				/>
			))}
		</>
	);
};
