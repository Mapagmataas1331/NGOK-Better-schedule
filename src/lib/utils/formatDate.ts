import { type DateValue } from '@internationalized/date';

export const dateValueToString = (date: DateValue): string => {
	const day = String(date.day).padStart(2, '0');
	const month = String(date.month).padStart(2, '0');
	const year = date.year;

	return `${day}.${month}.${year}`;
};

const dateStringToDate = (dateStr: string): Date => {
	const [day, month, year] = dateStr.split('.').map(Number);
	return new Date(year, month - 1, day);
};

export const dateValueToDate = (date: DateValue): Date => {
	return dateStringToDate(dateValueToString(date));
};
