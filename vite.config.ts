import { defineConfig } from 'vite';
import vitePluginReact from '@vitejs/plugin-react';
import vitePluginSvgr from 'vite-plugin-svgr';
import vitePluginTsconfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite';
import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vitePluginReact({
			jsxImportSource: '@emotion/react'
		}),
		vitePluginTsconfigPaths({
			parseNative: false
		}),
		vitePluginSvgr(),
		{
			name: 'custom-hmr-control',
			handleHotUpdate({ file, server }) {
				if (file.includes('src/app/configs/')) {
					server.ws.send({
						type: 'full-reload'
					});
					return [];
				}
			}
		},
		tailwindcss()
	],
	build: {
		outDir: 'build'
	},
	server: {
		host: '0.0.0.0',
		open: true,
		strictPort: false,
		port: 3000
	},
	define: {
		'import.meta.env.VITE_PORT': JSON.stringify(process.env.PORT || 3000),
		global: 'window'
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src')
		}
	},
	optimizeDeps: {
		include: [
			'@mui/icons-material',
			'@mui/material',
			'@mui/base',
			'@mui/styles',
			'@mui/system',
			'@mui/utils',
			'@emotion/cache',
			'@emotion/react',
			'@emotion/styled',
			'date-fns',
			'lodash'
		],
		exclude: [],
		esbuildOptions: {
			loader: {
				'.js': 'jsx'
			}
		}
	}
});
