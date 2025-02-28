import clsx from 'clsx';

import IconButton from '@mui/material/IconButton';

import FuseSvgIcon from '@/@fuse/core/FuseSvgIcon';
import type { FuseThemeOption } from '@/@fuse/core/FuseThemeSelector/ThemePreview';
import { useMainTheme } from '@/@fuse/core/FuseSettings/hooks/fuseThemeHooks';
import useFuseSettings from '@/@fuse/core/FuseSettings/hooks/useFuseSettings';
import type { FuseSettingsConfigType } from '@/@fuse/core/FuseSettings/FuseSettings';
import { showMessage } from '@/@fuse/core/FuseMessage/fuseMessageSlice';
import useUser from '@/@auth/useUser';
import { useAppDispatch } from '@/store/hooks';
import { styled } from '@mui/styles';

type LightDarkModeToggleProps = {
	className?: string;
	lightTheme: FuseThemeOption;
	darkTheme: FuseThemeOption;
};

const LightDarkModeToggleFloatOnRight = styled('div')(() => ({
	position: 'absolute',
	height: 'auto',
	right: 0,
	top: 160,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	overflow: 'hidden',
	padding: 0,
	borderTopLeftRadius: 6,
	borderBottomLeftRadius: 6,
	borderBottomRightRadius: 0,
	borderTopRightRadius: 0,
	zIndex: 999
}));

function LightDarkModeToggle(props: LightDarkModeToggleProps) {
	const { className = '', lightTheme, darkTheme } = props;
	const { setSettings } = useFuseSettings();
	const { isGuest, updateUserSettings } = useUser();
	const dispatch = useAppDispatch();

	const mainTheme = useMainTheme();

	async function handleThemeSelect(_theme: FuseThemeOption) {
		const _newSettings = setSettings({ theme: { ..._theme?.section } } as Partial<FuseSettingsConfigType>);

		if (!isGuest) {
			const updatedUserData = await updateUserSettings(_newSettings);

			if (updatedUserData) {
				dispatch(showMessage({ message: 'Configurações do usuário salvas.', variant: 'info' }));
			}
		}
	}

	const handleClick = () => {
		if (mainTheme.palette.mode === 'light') {
			handleThemeSelect(darkTheme);
		} else {
			handleThemeSelect(lightTheme);
		}
	};

	return (
		<LightDarkModeToggleFloatOnRight>
			<IconButton
				aria-controls="light-dark-toggle-menu"
				aria-haspopup="true"
				onClick={handleClick}
				className={clsx('border border-divider', className)}
			>
				{mainTheme.palette.mode === 'light' && <FuseSvgIcon>heroicons-outline:sun</FuseSvgIcon>}
				{mainTheme.palette.mode === 'dark' && <FuseSvgIcon>heroicons-outline:moon</FuseSvgIcon>}
			</IconButton>
		</LightDarkModeToggleFloatOnRight>
	);
}

export default LightDarkModeToggle;
