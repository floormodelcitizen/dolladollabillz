module.exports = {
	plugins: [require('prettier-plugin-tailwindcss')],
	useTabs: true,
	singleQuote: true,
	trailingComma: 'none',
	printWidth: 100,
	pluginSearchDirs: ['.'],
	overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }]
};
