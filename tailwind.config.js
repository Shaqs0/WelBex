/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}', 
	],
	theme: {
		extend: {
			colors: {
				'custom-dark': '#0E1014',
				'custom-transparent': 'rgba(14, 16, 20, 0)',
				'purple-color': '#833AB4',
				'gold-color': '#FCB045',
				'red-color': '#EE3E34;',
				'burgundy-color': '#961A1A;'
			},
			borderRadius: {
				'large': '259px',
			},
			blur: {
				'custom': '196px'
			},
			backgroundImage: {
				'custom-gradient': 'linear-gradient(180deg, #0E1014 0.12%, rgba(14, 16, 20, 0) 32.61%)',
			},
		},
	},
	plugins: [],
};

