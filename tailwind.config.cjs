const config = {
	mode: "jit",
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
	],
	theme: {
		extend: {},
	},
	plugins: [],
	variants: {
		animation: ['motion-safe']
	},
};

module.exports = config;
