/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

module.exports = {
	content: ['./components/**/*.tsx', './pages/**/*.tsx'],
	theme: {
		extend: {
			colors: {
				'accent-1': '#FAFAFA',
				'accent-2': '#EAEAEA',
				'accent-7': '#333',
				success: '#0070f3',
				cyan: '#79FFE1',
				primary: colors.blue,
			},
			spacing: {
				28: '7rem',
				72: '18rem',
				84: '21rem',
				96: '24rem',
				108: '27rem',
				116: '29rem',
			},
			letterSpacing: {
				tighter: '-.04em',
			},
			lineHeight: {
				tight: 1.2,
			},
			fontSize: {
				'5xl': '2.5rem',
				'6xl': '2.75rem',
				'7xl': '4.5rem',
				'8xl': '6.25rem',
			},
			boxShadow: {
				sm: '0 5px 10px rgba(0, 0, 0, 0.12)',
				md: '0 8px 30px rgba(0, 0, 0, 0.12)',
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		plugin(function ({ addUtilities }) {
		  addUtilities({
			/**
			 * Mimics the deprecated word-wrap: break-word; property (see: https://drafts.csswg.org/css-text-3/#word-break-property).
			 *
			 * Prefer Tailwinds `word-break` and only use this if soft wrap opportunities should be considered
			 * (https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-wrap).
			 */
			'.hn-break-words': {
			  'word-break': 'normal',
			  'overflow-wrap': 'anywhere',
			},
		  });
		}),
	],
};
