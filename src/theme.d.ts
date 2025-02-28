declare module '@mui/material/styles/createPalette' {
	interface PaletteColor {
		_states?: {
			hover: string;
			focus: string;
			active: string;
			disabled: string;
		};
	}

	interface SimplePaletteColorOptions {
		_states?: {
			hover: string;
			focus: string;
			active: string;
			disabled: string;
		};
	}
}
