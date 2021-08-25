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
				blackAlpha0: 'rgb(0,0,0,0)',
				blackAlpha1: 'rgb(0,0,0,1)',
			},
			width: {
				'25vw': '25vw',
				'50vw': '50vw',
				'75vw': '75vw',
				'85vw': '85vw',
				'100vw': '100vw',
				'150vw': '150vw',
			},
			inset: {
				'70%': '70%',
			},
			animation: {
				marquee75vw: 'marquee75vw 10s linear infinite',
				marquee150vw: 'marquee150vw 10s linear infinite',
			},
			keyframes: {
				marquee75vw: {
					'0%': {transform: 'translateX(0)'},
					'100%': {transform: 'translateX(-75vw)'},
				},
				marquee150vw: {
					'0%': {transform: 'translateX(0)'},
					'100%': {transform: 'translateX(-150vw)'},
				},
			},
		},
		textColor: {
			gray: '#999999',
		},
	},
	variants: {
		extend: {
			visibility: ['hover', 'group-hover'],
			border: ['focus'],
		},
	},
	plugins: [],
};
