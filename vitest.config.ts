/// <reference types="vitest" />
import { defineConfig, mergeConfig } from 'vitest/config';

import viteConfig from './vite.config';

const vitestConfig = defineConfig({
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: ['./vitest.setup.ts'],
		clearMocks: true,
		watch: false
	}
});

export default mergeConfig(viteConfig, vitestConfig);
