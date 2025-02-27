import themesConfig from '@/configs/themesConfig';

const themeOptions = [
	{
		id: 'Default',
		section: {
			main: themesConfig.default,
			navbar: themesConfig.default,
			toolbar: themesConfig.default,
			footer: themesConfig.default
		}
	},
	{
		id: 'Default Dark',
		section: {
			main: themesConfig.defaultDark,
			navbar: themesConfig.defaultDark,
			toolbar: themesConfig.defaultDark,
			footer: themesConfig.defaultDark
		}
	},
];

export default themeOptions;
