import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

const config = {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  kit: {
		experimental: {
			remoteFunctions: true
		}
  },
  compilerOptions: {
    experimental: {
      async: true
    }
  },
  preprocess: vitePreprocess()
}
export default config;
