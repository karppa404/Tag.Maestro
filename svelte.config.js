import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from "mdsvex";

/** @type {import('@sveltejs/kit').Config} */
const config = {
			extensions: [".svelte", ".svx"],

	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [vitePreprocess(), mdsvex()],
	compilerOptions: {
		experimental: {
			async: true
		}
	},
	kit: {
		experimental: {
			remoteFunctions: true
		},
		alias: {
			'@/*': './src/lib/*'
		},
		adapter: adapter()
	}
};

export default config;
