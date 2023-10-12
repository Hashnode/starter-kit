/** @type {import("prettier").Config} */
const config = {
	bracketSpacing: true,
	printWidth: 100,
	trailingComma: 'all',
	tabWidth: 2,
	useTabs: true,
	semi: true,
	singleQuote: true,
	plugins: [
		// comment for better diff
		'prettier-plugin-organize-imports',
		'prettier-plugin-tailwindcss',
		'prettier-plugin-packagejson',
	],
};

module.exports = config;
