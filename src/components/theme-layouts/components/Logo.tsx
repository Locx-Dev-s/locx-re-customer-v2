import { useMainTheme } from '@fuse/core/FuseSettings/hooks/fuseThemeHooks';
import { styled } from '@mui/material/styles';

const Root = styled('div')(({ theme }) => ({
	'& > .logo-icon': {
		transition: theme.transitions.create(['width', 'height'], {
			duration: theme.transitions.duration.shortest,
			easing: theme.transitions.easing.easeInOut
		})
	}
}));

/**
 * The logo component.
 */
function Logo() {
	const mainTheme = useMainTheme();

	return (
		<Root className="logo-container flex flex-1 items-center">
			<img
				className="logo-icon h-8 w-fit"
				src={
					mainTheme.palette.mode === 'dark'
						? '/assets/images/logo/logo-text-on-dark.svg'
						: '/assets/images/logo/logo-text.svg'
				}
				alt="logo"
			/>
		</Root>
	);
}

export default Logo;
