export interface Data {
	logo: string;
	name: string;
	description: string;
	isActive: boolean;
}

export type ArrStatus = 'all' | 'active' | 'inactive';

export type URLStatus = {
	[k in ArrStatus]: k extends 'all'
		? '/browser-extensions-manager-ui-main'
		: `/browser-extensions-manager-ui-main/${k}`;
};
export type URLStatusValues = URLStatus[ArrStatus];
export interface CardActive {
	isActive: boolean;
	name: string;
}

export enum Themes {
	DARK = 'dark',
	LIGHT = 'light',
	SYSTEM = 'system',
}
