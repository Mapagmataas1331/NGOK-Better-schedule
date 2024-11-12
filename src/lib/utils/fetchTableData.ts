const sheetId = '1FiMov0r4UUDKT6A56NWMImpoUakDC2YDevgaOpJQ7Qc';
const apiKey = 'AIzaSyAxU9vV25C6ylby6cg9BO3SLz7_7xj50wo';

const gidMap: { [key: string]: string } = {
	'1': '969201668',
	'2': '1941201541',
	'3': '1453481161',
	'4': '1406536602'
};

export const colToLetter = (col: number) => {
	let result = '';
	while (col > 0) {
		col--;
		result = String.fromCharCode((col % 26) + 65) + result;
		col = Math.floor(col / 26);
	}
	return result;
};

export const fetchTableData = async (year: string) => {
	const result: { schedule: string[][] | null; scheduleError: string | null } = {
		schedule: null,
		scheduleError: null
	};
	const url = buildUrl(year);
	try {
		const response = await fetch(url);
		const data = await response.json();
		if (!response.ok) {
			result.scheduleError = `Error ${data.error.code || '400'}: ${data.error.message || 'Unknown error'}`;
			return result;
		}
		result.schedule = data.values;
		return result;
	} catch (error) {
		if (error instanceof Error) {
			result.scheduleError = `Error ${error.name || '400'}: ${error.message || 'Unknown error'}`;
			return result;
		} else {
			result.scheduleError = `Error: ${String(error) || 'Unknown error'}`;
			return result;
		}
	}
};

const buildUrl = (sheetName: string) =>
	`https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${encodeURIComponent(sheetName + ' курс')}?key=${apiKey}`;

export const buildHref = (sheetName: string, row: number, col: number) => {
	return `https://docs.google.com/spreadsheets/d/${sheetId}/edit?gid=${gidMap[sheetName]}&range=${colToLetter(col)}${row}`;
};
