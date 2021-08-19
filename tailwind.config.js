module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			borderWidth: {
				'3px': '3px !important',
			},
			gradientColorStops: {
				dark: '#1D1D1D',
				light: 'rgb(21,21,21,0)',
			},
			width: {
				'25vw': '25vw',
				'50vw': '50vw',
				'75vw': '75vw',
				'100vw': '100vw',
			},
			animation: {
				marquee: 'marquee 60s linear infinite',
			},
			keyframes: {
				marquee: {
					'0%': {transform: 'translateX(0)'},
					'100%': {transform: 'translateX(-75vw)'},
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
