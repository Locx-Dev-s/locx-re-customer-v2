import IconButton from '@mui/material/IconButton';
import { useAppDispatch } from '@/store/hooks';
import _ from 'lodash';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import type { IconButtonProps } from '@mui/material/IconButton/IconButton';
import useFuseLayoutSettings from '@fuse/core/FuseLayout/useFuseLayoutSettings';
import useFuseSettings from '@fuse/core/FuseSettings/hooks/useFuseSettings';
import { navbarToggle, navbarToggleMobile } from './navbarSlice';

export type NavbarToggleButtonProps = IconButtonProps;

/**
 * The navbar toggle button.
 */
function NavbarToggleButton(props: NavbarToggleButtonProps) {
	const {
		children = (
			<FuseSvgIcon
				size={20}
				color="action"
			>
				heroicons-outline:bars-3
			</FuseSvgIcon>
		),
		...rest
	} = props;

	const dispatch = useAppDispatch();
	const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
	const { config } = useFuseLayoutSettings();
	const { setSettings } = useFuseSettings();

	return (
		<IconButton
			onClick={() => {
				if (isMobile) {
					dispatch(navbarToggleMobile());
				} else if (config?.navbar?.style === 'style-2') {
					setSettings(_.set({}, 'layout.config.navbar.folded', !config?.navbar?.folded));
				} else {
					dispatch(navbarToggle());
				}
			}}
			{...rest}
		>
			{children}
		</IconButton>
	);
}

export default NavbarToggleButton;
