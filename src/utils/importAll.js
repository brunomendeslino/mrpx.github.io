export const importAll = r => {
	return r
		.keys()
		.sort() // Ensure files are sorted alphabetically
		.map(key => r(key));
};
