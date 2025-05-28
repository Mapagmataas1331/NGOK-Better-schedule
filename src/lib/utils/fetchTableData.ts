const sheetId = '1FiMov0r4UUDKT6A56NWMImpoUakDC2YDevgaOpJQ7Qc';
const apiKey = 'AIzaSyAxU9vV25C6ylby6cg9BO3SLz7_7xj50wo';

const gidMap: Record<string, string> = {
	student: '1374615807',
	teacher: '945533765'
};

export const colToLetter = (col: number): string => {
	let result = '';
	while (col > 0) {
		col--;
		result = String.fromCharCode((col % 26) + 65) + result;
		col = Math.floor(col / 26);
	}
	return result;
};

const formatFetchError = (error: unknown): string => {
	if (error instanceof Error) {
		return `Error ${error.name || 'Unknown'}: ${error.message || 'Unknown error'}`;
	}
	return `Error: ${String(error) || 'Unknown error'}`;
};

export const fetchTableData = async (sheet: string) => {
	const result: { schedule: string[][] | null; scheduleError: string | null } = {
		schedule: null,
		scheduleError: null
	};

	const url = await buildUrl(sheet);
	if (!url) {
		result.scheduleError = 'Failed to build URL: sheet name could not be determined.';
		return result;
	}

	try {
		const response = await fetch(url);
		const data = await response.json();

		if (!response.ok) {
			result.scheduleError = `Error ${data.error?.code || response.status}: ${data.error?.message || 'Unknown error'}`;
			return result;
		}

		result.schedule = data.values;
		return result;
	} catch (error) {
		result.scheduleError = formatFetchError(error);
		return result;
	}
};

const buildUrl = async (sheet: string): Promise<string> => {
	const sheetName = await getSheetName(sheet);
	if (!sheetName) return '';
	return `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${encodeURIComponent(sheetName)}?key=${apiKey}`;
};

const getSheetName = async (sheet: string): Promise<string | null> => {
	const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}?key=${apiKey}`;

	try {
		const response = await fetch(url);
		const data = await response.json();

		if (!response.ok) {
			console.error(
				`Error ${data.error?.code || response.status}: ${data.error?.message || 'Unknown error'}`
			);
			return null;
		}

		const matchingSheet = data.sheets.find(
			(s: any) => s.properties?.sheetId?.toString() === gidMap[sheet]
		);

		return matchingSheet?.properties?.title || null;
	} catch (error) {
		console.error('Failed to fetch sheet name:', formatFetchError(error));
		return null;
	}
};

export const buildHref = (sheet: string, row: number, col: number): string => {
	return `https://docs.google.com/spreadsheets/d/${sheetId}/edit?gid=${gidMap[sheet]}&range=${colToLetter(col)}${row}`;
};
