import adapter from '@sveltejs/adapter-auto'
import preprocess from 'svelte-preprocess'
import svg from '@poppanator/sveltekit-svg'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),

		vite: {
			plugins: [
				svg({
					svgoOptions: {
						multipass: true,
						plugins: [
							{
								name: 'preset-default',
								params: {
									overrides: {
										removeViewBox: false,
									},
								},
							},
							'removeDimensions',
						],
					},
				}),
			],
			test: {
				include: ['**/*.test.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
				environment: 'jsdom',
				globals: true,
				setupFiles: 'src/setupTests.ts',
			},
		},
	},
}

export default config
