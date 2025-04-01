import dataJson from '../../data.json';
import { Data } from '../types/data.types';

export const getData = (): Data[] => structuredClone(dataJson);

export const dataCards = getData();
