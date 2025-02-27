import type { FuseThemesType } from '@/@fuse/core/FuseSettings/FuseSettings';

/**
 * The lightPaletteText object defines the text color palette for the light theme.
 */
export const lightPaletteText = {
	primary: 'rgb(17, 24, 39)',
	secondary: 'rgb(107, 114, 128)',
	disabled: 'rgb(149, 156, 169)'
};

/**
 * The darkPaletteText object defines the text color palette for the dark theme.
 */
export const darkPaletteText = {
	primary: 'rgb(255,255,255)',
	secondary: 'rgb(148, 163, 184)',
	disabled: 'rgb(156, 163, 175)'
};

/**
 * The themesConfig object is a configuration object for the color themes of the Fuse application.
 */
export const themesConfig: FuseThemesType = {
	default: {
		palette: {
			mode: 'light',
			divider: '#e7e7e7',
			text: {
				primary: '#5d5d5d',
				secondary: '#262626',
				disabled: '#d1d1d1'
			},
			common: {
				black: '#000000',
				white: '#FFFFFF'
			},
			primary: {
				light: '#ffdb0d',
				main: '#ffcc00',
				dark: '#d19500',
				contrastText: '#262626'
			},
			secondary: {
				light: '#fffee7',
				main: '#fff9c5',
				dark: '#fff9c5',
				contrastText: '#262626'
			},
			background: {
				paper: '#ffffff',
				default: '#f6f6f6'
			},
			grey: {
				'100': '#f6f6f6',
				'200': '#e7e7e7',
				'300': '#d1d1d1',
				'400': '#b0b0b0',
				'500': '#888888',
				'600': '#6d6d6d',
				'700': '#5d5d5d',
				'800': '#4F4F4F',
				'900': '#454545',
				A100: '#3d3d3d',
				A200: '#262626'
			},
			success: {
				light: '#39ae62',
				main: '#28894a',
				dark: '#1d4a2e',
				contrastText: '#262626'
			},
			info: {
				light: '#0284c7',
				main: '#075985',
				dark: '#0c4a6e',
				contrastText: '#262626'
			},
			warning: {
				light: '#dbbe34',
				main: '#cba727',
				dark: '#af851f',
				contrastText: '#262626'
			},
			error: {
				light: '#ef4444',
				main: '#b91c1c',
				dark: '#991b1b',
				contrastText: '#262626'
			}
		}
	},
	defaultDark: {
		palette: {
			mode: 'dark',
			divider: 'rgba(79,79,79,0.5)',
			text: {
				primary: '#e7e7e7',
				secondary: '#ffffff',
				disabled: '#454545'
			},
			common: {
				black: '#000000',
				white: '#FFFFFF'
			},
			primary: {
				light: '#ffdb0d',
				main: '#ffcc00',
				dark: '#d19500',
				contrastText: '#262626'
			},
			secondary: {
				light: '#fffee7',
				main: '#ffffff',
				dark: '#fff9c5',
				contrastText: '#262626'
			},
			background: {
				paper: '#262626',
				default: '#3d3d3d'
			},
			grey: {
				'100': '#f6f6f6',
				'200': '#e7e7e7',
				'300': '#d1d1d1',
				'400': '#b0b0b0',
				'500': '#888888',
				'600': '#6d6d6d',
				'700': '#5d5d5d',
				'800': '#4F4F4F',
				'900': '#454545',
				A100: '#3d3d3d',
				A200: '#262626'
			},
			success: {
				light: '#39ae62',
				main: '#28894a',
				dark: '#1d4a2e',
				contrastText: '#ffffff'
			},
			info: {
				light: '#0284c7',
				main: '#075985',
				dark: '#0c4a6e',
				contrastText: '#ffffff'
			},
			warning: {
				light: '#dbbe34',
				main: '#cba727',
				dark: '#af851f',
				contrastText: '#ffffff'
			},
			error: {
				light: '#ef4444',
				main: '#b91c1c',
				dark: '#991b1b',
				contrastText: '#ffffff'
			}
		}
	}
};

export default themesConfig;
