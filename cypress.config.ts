import { defineConfig } from 'cypress';

export default defineConfig({
	viewportWidth: 800,
	viewportHeight: 1024,
	e2e: {},
	fixturesFolder: false,
	video: false
});
