/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');

const fontInterVar = 'var(--font-inter)';
const fontPlusJakartaVar = 'var(--font-plus-jakarta-sans)';

module.exports = {
	content: ['./components/**/*.tsx', './pages/**/*.tsx', './components/*.js'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: [fontInterVar, ...defaultTheme.fontFamily.sans],
				heading: [fontPlusJakartaVar, ...defaultTheme.fontFamily.sans],
			},
			colors: {
				'accent-1': '#FAFAFA',
				'accent-2': '#EAEAEA',
				'accent-7': '#333',
				success: '#0070f3',
				cyan: '#79FFE1',
				primary: colors.blue,
			},
			typography: () => ({
				DEFAULT: {
				  css: {
					color: '#111',
					a: {
					  color: '#111',
					  '&.user-mention': {
						textDecoration: 'none',
						color: '#2962ff',
					  },
					},
					'div[data-node-type="callout"]': {
					  display: 'flex',
					  'justify-content': 'flex-start',
					  'align-items': 'flex-start',
					  'background-color': '#F8FAFC',
					  border: '1px solid #E2E8F0',
					  padding: ' 1rem 1.5rem',
					  gap: '0.5rem',
					  'border-radius': '0.5rem',
					  margin: '1rem 0',
					  'word-break': 'break-word',
					},
					'div[data-node-type="callout-emoji"]': {
					  background: '#E2E8F0',
					  'border-radius': '0.5rem',
					  minWidth: '1.75rem',
					  width: '1.75rem',
					  height: '1.5rem',
					  display: 'flex',
					  'margin-top': '0.3rem',
					  'justify-content': 'center',
					  'align-items': 'center',
					  'font-size': '1rem',
					},
					'> ul > li > *:first-child': {
					  marginTop: '0px',
					},
					'> ul > li > *:last-child': {
					  marginBottom: '0px',
					},
					'> ol > li > *:first-child': {
					  marginTop: '0px',
					},
					'> ol > li > *:last-child': {
					  marginBottom: '0px',
					},
					details: {
					  border: 'none',
					  borderRadius: '4px',
					  padding: '.5em 3em 0',
					},
					'details > :not(summary)': {
					  padding: '0.5em 0 0.5em 1em',
					  position: 'relative',
					  margin: '0',
					},
					'details > :not(summary)::before': {
					  position: 'absolute',
					  left: '0.3em',
					  top: '0',
					  content: '""',
					  border: '1px solid #cbd5e1',
					  borderRadius: '4px',
					  width: '1px',
					  height: '100%',
					},
					summary: {
					  fontWeight: 'bold',
					  margin: '0',
					  marginBottom: '0.5rem',
					},
					kbd: {
					  backgroundColor: '#eee',
					  borderRadius: '3px',
					  border: '1px solid #b4b4b4',
					  boxShadow: '0 1px 1px rgba(0, 0, 0, .2), 0 2px 0 0 rgba(255, 255, 255, .7) inset',
					  color: '#333',
					  display: 'inline-block',
					  fontSize: '.85em',
					  fontWeight: '700',
					  lineWeight: '1',
					  padding: '2px 4px',
					  whiteSpace: 'nowrap',
					},
					abbr: {
					  fontStyle: 'italic',
					},
					dt: {
					  fontWeight: 'bold',
					},
					dd: {
					  marginBottom: '1rem',
					  marginInlineStart: '1rem',
					},
					code: {
					  '&::after': {
						display: 'none',
					  },
					  '&::before': {
						display: 'none',
					  },
					},
					blockquote: {
					  borderColor: '#e2e8f0',
					},
					'blockquote p:first-of-type::before': {
					  content: '""',
					},
					'blockquote p:last-of-type::after': {
					  content: '""',
					},
					h1: {
					  fontFamily: `${[fontPlusJakartaVar, ...defaultTheme.fontFamily.sans]}`,
					},
					h2: {
					  fontFamily: `${[fontPlusJakartaVar, ...defaultTheme.fontFamily.sans]}`,
					},
					h3: {
					  fontFamily: `${[fontPlusJakartaVar, ...defaultTheme.fontFamily.sans]}`,
					},
					h4: {
					  fontFamily: `${[fontPlusJakartaVar, ...defaultTheme.fontFamily.sans]}`,
					},
					h5: {
					  fontFamily: `${[fontPlusJakartaVar, ...defaultTheme.fontFamily.sans]}`,
					},
					h6: {
					  fontFamily: `${[fontPlusJakartaVar, ...defaultTheme.fontFamily.sans]}`,
					},
					td: {
					  border: '1px solid rgb(226 232 240 / 80%)',
					},
					th: {
					  border: '1px solid rgb(226 232 240 / 80%)',
					},
					pre: {
					  backgroundColor: '#0f172a',
					},
					thead: {
					  fontWeight: 600,
					},
				  },
				},
				dark: {
				  css: {
					color: '#fafafa',
					a: {
					  color: '#fafafa',
					},
					'div[data-node-type="callout"]': {
					  'background-color': '#1E293B',
					  border: '1px solid #334155',
					},
					'div[data-node-type="callout-emoji"]': {
					  background: '#475569',
					},
					'details > :not(summary)::before': {
					  border: '1px solid #334155',
					},
					kbd: {
					  backgroundColor: '#444',
					  border: '1px solid #757575',
					  color: '#FFF',
					},
					strong: {
					  color: '#fafafa',
					},
					'ol > li::before': {
					  color: '#bdbdbd',
					},
					'ol > li::marker': {
					  color: '#bdbdbd',
					},
					blockquote: {
					  borderColor: '#334155',
					  color: '#f8fafc',
					},
					h1: {
					  color: '#fafafa',
					},
					h2: {
					  color: '#fafafa',
					},
					h3: {
					  color: '#fafafa',
					},
					h4: {
					  color: '#fafafa',
					},
					'figure figcaption': {
					  color: '#bdbdbd',
					},
					code: {
					  color: '#fafafa',
					  backgroundColor: '#1f2937',
					},
					'a code': {
					  color: '#fafafa',
					},
					pre: {
					  color: '#fafafa',
					  backgroundColor: '#1e293b',
					},
					'pre code': {
					  color: '#fafafa',
					  backgroundColor: 'transparent',
					},
					thead: {
					  color: '#fafafa',
					},
					td: {
					  border: '1px solid #1E293B',
					},
					th: {
					  border: '1px solid #1E293B',
					},
				  },
				},
				sm: {
				  css: {
					'> ul > li > *:first-child': {
					  marginTop: '0px',
					},
					'> ul > li > *:last-child': {
					  marginBottom: '0px',
					},
					'> ol > li > *:first-child': {
					  marginTop: '0px',
					},
					'> ol > li > *:last-child': {
					  marginBottom: '0px',
					},
				  },
				},
				md: {
				  css: {
					'> ul > li > *:first-child': {
					  marginTop: '0px',
					},
					'> ul > li > *:last-child': {
					  marginBottom: '0px',
					},
					'> ol > li > *:first-child': {
					  marginTop: '0px',
					},
					'> ol > li > *:last-child': {
					  marginBottom: '0px',
					},
				  },
				},
				lg: {
				  css: {
					h1: {
					  fontSize: '1.8em',
					  lineHeight: '1.2',
					},
					'> ul > li > *:first-child': {
					  marginTop: '0px',
					},
					'> ul > li > *:last-child': {
					  marginBottom: '0px',
					},
					'> ol > li > *:first-child': {
					  marginTop: '0px',
					},
					'> ol > li > *:last-child': {
					  marginBottom: '0px',
					},
				  },
				},
				xl: {
				  css: {
					h1: {
					  fontSize: '2em',
					  lineHeight: '1.2',
					},
					'> ul > li > *:first-child': {
					  marginTop: '0px',
					},
					'> ul > li > *:last-child': {
					  marginBottom: '0px',
					},
					'> ol > li > *:first-child': {
					  marginTop: '0px',
					},
					'> ol > li > *:last-child': {
					  marginBottom: '0px',
					},
					'details > :not(summary)': {
					  margin: 0,
					},
				  },
				},
				'2xl': {
				  css: {
					'> ul > li > *:first-child': {
					  marginTop: '0px',
					},
					'> ul > li > *:last-child': {
					  marginBottom: '0px',
					},
					'> ol > li > *:first-child': {
					  marginTop: '0px',
					},
					'> ol > li > *:last-child': {
					  marginBottom: '0px',
					},
				  },
				},
			}),
			width: {
				5.5: '1.35rem',
			},
			height: {
				5.5: '1.35rem',
				fc: 'fit-content',
			},
			borderColor: {
				default: 'rgba(204, 214, 221, .5)',
			},
			borderWidth: {
				'1/2': '0.5px',
				'1-1/2': '1.5px',
			},
			inset: {
				100: '100%',
				50: '50%',
			},
			spacing: {
				28: '7rem',
				72: '18rem',
				84: '21rem',
				96: '24rem',
				108: '27rem',
				116: '29rem',
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
			minHeight: {
				12: '12vh',
				16: '16vh',
				30: '30vh',
			},
			maxHeight: {
				80: '80vh',
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
