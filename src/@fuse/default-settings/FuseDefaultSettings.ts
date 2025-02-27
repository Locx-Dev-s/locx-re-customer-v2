import { createTheme } from '@mui/material/styles';
import qs from 'qs';
import type { ThemeOptions } from '@mui/material/styles/createTheme';
import type { FuseSettingsConfigType } from '@/@fuse/core/FuseSettings/FuseSettings';

/**
 * The defaultTheme object defines the default color palette for the application.
 */
const defaultTheme = {
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
};

/**
 * The defaultSettings object defines the default settings for the Fuse application.
 */
export const defaultSettings = {
	customScrollbars: true,
	direction: 'ltr',
	layout: {},
	theme: {
		main: defaultTheme,
		navbar: defaultTheme,
		toolbar: defaultTheme,
		footer: defaultTheme
	}
};

/**
 * The getParsedQuerySettings function parses the query string to retrieve the default settings for the Fuse application.
 * It returns a FuseSettingsConfigType object that can be used to configure the application.
 */
export function getParsedQuerySettings(): FuseSettingsConfigType | object {
	if (typeof window === 'undefined') {
		return null;
	}

	const parsedQueryString = qs.parse(window?.location?.search, { ignoreQueryPrefix: true });

	const { defaultSettings = {} } = parsedQueryString;

	if (typeof defaultSettings === 'string') {
		// Handle the case when defaultSettings is a string
		return JSON.parse(defaultSettings) as FuseSettingsConfigType;
	}

	return {};

	// Generating route params from settings
	/* const settings = qs.stringify({
        defaultSettings: JSON.stringify(defaultSettings, {strictNullHandling: true})
    });
    console.info(settings); */
}

/**
 * The defaultThemeOptions object defines the default options for the MUI theme.
 */
export const defaultThemeOptions = {
	typography: {
		fontFamily: ['Inter var', 'Roboto', '"Helvetica"', 'Arial', 'sans-serif'].join(','),
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 500
	},
	breakpoints: {
		values: {
			xs: 0, // Extra small devices
			sm: 600, // Small devices
			md: 960, // Medium devices
			lg: 1280, // Large devices
			xl: 1920 // Extra large devices
		}
	},
	components: {
		MuiSvgIcon: {
			defaultProps: {},
			styleOverrides: {
				root: {},
				sizeSmall: {
					width: 16,
					height: 16
				},
				sizeMedium: {
					width: 20,
					height: 20
				},
				sizeLarge: {
					width: 24,
					height: 24
				}
			}
		},
		MuiAppBar: {
			defaultProps: {
				enableColorOnDark: true
			},
			styleOverrides: {
				root: {
					backgroundImage: 'none'
				}
			}
		},
		MuiPickersPopper: {
			styleOverrides: {
				root: {
					zIndex: 99999
				}
			}
		},
		MuiAutocomplete: {
			styleOverrides: {
				popper: {
					zIndex: 99999
				}
			}
		},
		MuiButtonBase: {
			defaultProps: {
				// disableRipple: true
			},
			styleOverrides: {
				root: {}
			}
		},
		MuiIconButton: {
			variants: [
				{
					props: { size: 'small' },
					style: {
						width: 24,
						height: 24,
						maxHeight: 24,
					}
				},
				{
					props: { size: 'medium' },
					style: {
						width: 36,
						height: 36,
						maxHeight: 36
					}
				},
				{
					props: { size: 'large' },
					style: {
						width: 40,
						height: 40,
						maxHeight: 40
					}
				}
			],
			styleOverrides: {
				root: {
					borderRadius: 4
				}
			}
		},
		MuiBadge: {
			defaultProps: {
				variant: 'standard'
			},
			styleOverrides: {
				root: {
					position: 'relative',
					display: 'inline-flex',
					verticalAlign: 'middle',
					flexShrink: 0,
					borderRadius: 4,
					width: 'auto',
					height: 'auto',
					justifyContent: 'center',
					alignItems: 'center'
				},
				badge: ({ theme }) => ({
					backgroundColor: theme.palette.primary.main,
					color: theme.palette.common.black,
					fontSize: 8,
					fontWeight: 700,
					minWidth: 12,
					minHeight: 12,
					height: 'auto',
					top: 0,
					padding: 2
				})
			}
		},
		MuiAvatar: {
			defaultProps: {},
			styleOverrides: {
				root: ({ theme }) => ({
					backgroundColor: theme.palette.primary.main,
					color: theme.palette.common.black,
					width: 32,
					height: 32,
					borderRadius: 4,
					fontSize: 14
				})
			}
		},
		MuiButton: {
			defaultProps: {
				variant: 'text',
				color: 'inherit'
			},
			styleOverrides: {
				root: {
					textTransform: 'none'
					// lineHeight: 1,
				},
				sizeMedium: {
					borderRadius: 8,
					height: 36,
					minHeight: 36,
					maxHeight: 36
				},
				sizeSmall: {
					borderRadius: 8,
					height: 32,
					minHeight: 32,
					maxHeight: 32
				},
				sizeLarge: {
					height: 40,
					minHeight: 40,
					maxHeight: 40,
					borderRadius: 8
				},
				contained: {
					boxShadow: 'none',
					'&:hover, &:focus': {
						boxShadow: 'none'
					}
				}
			}
		},
		MuiButtonGroup: {
			defaultProps: {
				color: 'secondary'
			},
			styleOverrides: {
				contained: {
					borderRadius: 8
				}
			}
		},
		MuiTab: {
			styleOverrides: {
				root: {
					textTransform: 'none'
				}
			}
		},
		MuiDrawer: {
			styleOverrides: {
				paper: {}
			}
		},
		MuiDialog: {
			styleOverrides: {
				paper: {
					borderRadius: 12
				}
			}
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					backgroundImage: 'none'
				},
				rounded: {
					borderRadius: 12
				}
			}
		},
		MuiCard: {
			styleOverrides: {}
		},
		MuiPopover: {
			styleOverrides: {
				paper: {
					borderRadius: 8
				}
			}
		},
		MuiTextField: {
			defaultProps: {
				color: 'secondary'
			},
			styleOverrides: {
				root: {
					'& > .MuiFormHelperText-root': {
						marginLeft: 11
					}
				}
			}
		},
		MuiInputLabel: {
			defaultProps: {
				color: 'secondary'
			},
			styleOverrides: {
				shrink: {
					transform: 'translate(11px, -7px) scale(0.8)'
				},
				root: {
					transform: 'translate(11px, 8px) scale(1)',
					'&.Mui-focused': {}
				}
			}
		},
		MuiSelect: {
			defaultProps: {
				color: 'secondary'
			},
			styleOverrides: {
				select: {
					minHeight: 0
				}
			}
		},
		MuiFormHelperText: {
			styleOverrides: {
				root: {}
			}
		},
		MuiInputAdornment: {
			styleOverrides: {
				root: {
					marginRight: 0
				}
			}
		},
		MuiInputBase: {
			styleOverrides: {
				root: {
					// height: 36,
					minHeight: 36,
					borderRadius: 8,
					lineHeight: 1
				},
				legend: {
					fontSize: '0.75em'
				},
				input: {
					padding: '5px 11px'
				},
				adornedStart: {
					paddingLeft: `11px!important`
				},
				sizeSmall: {
					height: 32,
					minHeight: 32,
					borderRadius: 8
				},
				sizeMedium: {
					height: 36,
					minHeight: 36,
					borderRadius: 8
				},
				sizeLarge: {
					height: 40,
					minHeight: 40,
					borderRadius: 8
				}
			}
		},
		MuiOutlinedInput: {
			defaultProps: {
				color: 'secondary'
			},
			styleOverrides: {
				root: {
					// paddingLeft: 11
				},
				input: {
					padding: '5px 11px'
				}
			}
		},
		MuiFilledInput: {
			styleOverrides: {
				root: {
					borderRadius: 8,
					'&:before, &:after': {
						display: 'none'
					}
				},

				input: {
					padding: '5px 11px'
				}
			}
		},
		MuiSlider: {
			defaultProps: {
				color: 'secondary'
			}
		},
		MuiCheckbox: {
			defaultProps: {
				color: 'secondary'
			}
		},
		MuiRadio: {
			defaultProps: {
				color: 'secondary'
			}
		},
		MuiSwitch: {
			defaultProps: {
				color: 'secondary'
			}
		},
		MuiTypography: {
			variants: [
				{
					props: { color: 'text.secondary' },
					style: {
						color: 'text.secondary'
					}
				}
			]
		}
	}
};

/**
 * The mustHaveThemeOptions object defines the options that must be present in the MUI theme.
 */
export const mustHaveThemeOptions = {
	typography: {
		fontSize: 13,
		body1: {
			fontSize: '0.8125rem'
		},
		body2: {
			fontSize: '0.8125rem'
		}
	}
};

/**
 * The extendThemeWithMixins function extends the theme with mixins.
 */
export function extendThemeWithMixins(obj: ThemeOptions) {
	const theme = createTheme(obj);
	return {
		border: (width = 1) => ({
			borderWidth: width,
			borderStyle: 'solid',
			borderColor: theme.palette.divider
		}),
		borderLeft: (width = 1) => ({
			borderLeftWidth: width,
			borderStyle: 'solid',
			borderColor: theme.palette.divider
		}),
		borderRight: (width = 1) => ({
			borderRightWidth: width,
			borderStyle: 'solid',
			borderColor: theme.palette.divider
		}),
		borderTop: (width = 1) => ({
			borderTopWidth: width,
			borderStyle: 'solid',
			borderColor: theme.palette.divider
		}),
		borderBottom: (width = 1) => ({
			borderBottomWidth: width,
			borderStyle: 'solid',
			borderColor: theme.palette.divider
		})
	};
}
