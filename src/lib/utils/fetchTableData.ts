const sheetId = '1FiMov0r4UUDKT6A56NWMImpoUakDC2YDevgaOpJQ7Qc';
const apiKey = 'AIzaSyAxU9vV25C6ylby6cg9BO3SLz7_7xj50wo';

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

/**
 * Levenshtein distance: minimum edits between two strings
 */
const levenshtein = (a: string, b: string): number => {
	const dp: number[][] = Array.from({ length: a.length + 1 }, () => Array(b.length + 1).fill(0));
	for (let i = 0; i <= a.length; i++) dp[i][0] = i;
	for (let j = 0; j <= b.length; j++) dp[0][j] = j;

	for (let i = 1; i <= a.length; i++) {
		for (let j = 1; j <= b.length; j++) {
			if (a[i - 1] === b[j - 1]) {
				dp[i][j] = dp[i - 1][j - 1];
			} else {
				dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
			}
		}
	}
	return dp[a.length][b.length];
};

const normalize = (str: string): string =>
	str
		.normalize('NFC') // normalize Unicode
		.trim()
		.toLowerCase();

/**
 * Fuzzy check if text contains target keyword
 * (within maxDist edits in any word)
 */
const fuzzyIncludes = (text: string, keyword: string, maxDist = 2): boolean => {
	const words = text.split(/\s+/);
	for (const w of words) {
		if (w.includes(keyword)) return true; // direct match
		if (levenshtein(w, keyword) <= maxDist) return true; // typo match
	}
	return false;
};

export const fetchTableData = async (
	sheet: 'student' | 'teacher' | 'auditorium',
	firstY: number
) => {
	const result: { schedule: string[][] | null; scheduleError: string | null } = {
		schedule: null,
		scheduleError: null
	};

	const url = await buildUrl(sheet, firstY);
	if (!url) {
		result.scheduleError = 'Failed to build URL: sheet name could not be determined.';
		return result;
	}

	try {
		const response = await fetch(url);
		const data = await response.json();

		if (!response.ok) {
			result.scheduleError = `Error ${data.error?.code || response.status}: ${
				data.error?.message || 'Unknown error'
			}`;
			return result;
		}

		result.schedule = data.values;
		return result;
	} catch (error) {
		result.scheduleError = formatFetchError(error);
		return result;
	}
};

const buildUrl = async (
	sheet: 'student' | 'teacher' | 'auditorium',
	firstY: number
): Promise<string> => {
	const sheetName = await getSheetName(sheet);
	if (!sheetName) return '';
	const range = `${encodeURIComponent(sheetName)}!A${firstY}:ZZ`;
	return `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;
};

const getSheetName = async (type: 'student' | 'teacher' | 'auditorium'): Promise<string | null> => {
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

		// only visible sheets
		const sheets = data.sheets
			.filter((s: any) => !s.properties?.hidden) // ✅ visible only
			.map((s: any) => s.properties?.title)
			.filter(Boolean);

		const normalized = sheets.map((t: string) => ({ raw: t, norm: normalize(t) }));

		let filterFn: (t: string) => boolean;

		if (type === 'student') {
			filterFn = (t) =>
				fuzzyIncludes(t, 'расписание') &&
				!fuzzyIncludes(t, 'преподав') &&
				!fuzzyIncludes(t, 'аудитор') &&
				!fuzzyIncludes(t, 'пересдач');
		} else if (type === 'teacher') {
			filterFn = (t) => fuzzyIncludes(t, 'расписание') && fuzzyIncludes(t, 'преподав');
		} else {
			filterFn = (t) => fuzzyIncludes(t, 'расписание') && fuzzyIncludes(t, 'аудитор');
		}

		const matches = normalized.filter((t) => filterFn(t.norm));
		if (matches.length === 0) return null;

		// assume the last one is the latest (new sheet each week)
		return matches[matches.length - 1].raw;
	} catch (error) {
		console.error('Failed to fetch sheet name:', formatFetchError(error));
		return null;
	}
};

export const buildHref = async (
	sheet: 'student' | 'teacher' | 'auditorium',
	row: number,
	col: number
): Promise<string> => {
	const sheetName = await getSheetName(sheet);
	if (!sheetName) return '';
	return `https://docs.google.com/spreadsheets/d/${sheetId}/edit#gid=0&range=${colToLetter(
		col
	)}${row}&sheet=${encodeURIComponent(sheetName)}`;
};
