export const getTextWithValues = (text: string, values: any[]): string => {
	let result = text;

	for (let i = 0; i < values.length; i++) {
		let key = i == 0 ? '{value}' : `{value${i + 1}}`;
		result = result.replace(key, values[i]);
	}

	return result;
};
