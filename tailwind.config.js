/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			animation: {
				sparkle: 'sparkle 1s ease-in-out var(--sparkle-delay) infinite',
			},
			keyframes: {
				sparkle: {
					'0%': {
						opacity: 0,
						transform: 'scale(0) rotate(75deg)',
					},
					'50%': {
						opacity: 1,
						transform: 'scale(var(--sparkle-scale)) rotate(120deg)',
					},
					'100%': {
						opacity: 1,
						transform: 'scale(0) rotate(150deg)',
					},
				},
			},
		},
	},
	plugins: [],
}
