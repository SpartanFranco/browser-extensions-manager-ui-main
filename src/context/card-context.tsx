import React, { createContext, useEffect, useState } from 'react';
import { dataCards } from '../lib/getData';
import { CardActive, Data } from '../types/data.types';

interface ContextProps {
	data: Data[];
	setData: React.Dispatch<React.SetStateAction<Data[]>>;
	setCardActive: React.Dispatch<React.SetStateAction<CardActive>>;
}

export const CardContext = createContext<ContextProps>({} as ContextProps);

export const CardsProvider = ({ children }: { children: React.ReactNode }) => {
	const [data, setData] = useState<Data[]>(dataCards);
	const [cardActive, setCardActive] = useState<CardActive>({} as CardActive);

	useEffect(() => {
		const updatedData = data.map((item) =>
			item.name === cardActive.name
				? { ...item, isActive: !cardActive.isActive }
				: item,
		);
		setData(updatedData);
	}, [cardActive]);

	return (
		<CardContext.Provider value={{ data, setData, setCardActive }}>
			{children}
		</CardContext.Provider>
	);
};
