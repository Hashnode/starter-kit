const { fontFamily } = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: ['app/**/*.{ts,tsx}', 'components/**/*.{ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-sans)', ...fontFamily.sans],
				oswald: ['Oswald', 'sans-serif'],
				montserrat: ['Montserrat', 'sans-serif'],
			},
		},
	},
	// plugins: [
	// 	plugin(function ({ addUtilities }: any) {
	// 		const newUtilities = {
	// 			'.no-scrollbar::-webkit-scrollbar': {
	// 				display: 'none',
	// 			},
	// 			'.no-scrollbar': {
	// 				'-ms-overflow-style': 'none',
	// 				'scrollbar-width': 'none',
	// 			},
	// 		};

	// 		addUtilities(newUtilities, ['responsive', 'hover']);
	// 	}),
	// ],
};
