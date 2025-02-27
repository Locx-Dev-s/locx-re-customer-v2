import { memo } from 'react';
import clsx from 'clsx';
import { Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import FuseScrollbars from '@fuse/core/FuseScrollbars';
import Navigation from '@/components/theme-layouts/components/navigation/Navigation';
import UserMenu from '@/components/theme-layouts/components/UserMenu';
import NavbarPinToggleButton from '@/components/theme-layouts/components/navbar/NavbarPinToggleButton';
import Logo from '@/components/theme-layouts/components/Logo';

const Root = styled('div')(({ theme }) => ({
	backgroundColor: theme.palette.background.default,
	color: theme.palette.text.primary,
	borderRight: `1px solid ${theme.palette.divider}`,
	// '& ::-webkit-scrollbar-thumb': {
	// 	boxShadow: `inset 0 0 0 20px ${theme.palette.divider}`,
	// 	...theme.applyStyles('light', {
	// 		boxShadow: `inset 0 0 0 20px ${'rgba(0, 0, 0, 0.24)'}`
	// 	})
	// },
	// '& ::-webkit-scrollbar-thumb:active': {
	// 	boxShadow: `inset 0 0 0 20px ${theme.palette.divider}`,
	// 	...theme.applyStyles('light', {
	// 		boxShadow: `inset 0 0 0 20px ${'rgba(0, 0, 0, 0.37)'}`
	// 	})
	// }
}));

const StyledContent = styled(FuseScrollbars)(() => ({
	overscrollBehavior: 'contain',
	overflowX: 'hidden',
	overflowY: 'auto',
	WebkitOverflowScrolling: 'touch',
	backgroundRepeat: 'no-repeat',
	backgroundSize: '100% 40px, 100% 10px',
	backgroundAttachment: 'local, scroll'
}));

type NavbarStyle2ContentProps = {
	className?: string;
};

/**
 * The navbar style 2 content.
 */
function NavbarStyle2Content(props: NavbarStyle2ContentProps) {
	const { className = '' } = props;

	return (
		<Root className={clsx('flex h-full flex-auto flex-col overflow-hidden', className)}>
			<div className="navbar-header flex justify-between h-12 shrink-0 flex-row items-center px-3 md:h-auto md:min-h-16">
				<Logo />
				<NavbarPinToggleButton className="h-8 w-8 p-0" />
			</div>

			<StyledContent
				className="flex min-h-0 flex-1 flex-col py-2"
				option={{ suppressScrollX: true, wheelPropagation: false }}
			>
				<Navigation layout="vertical" />
			</StyledContent>

			<Divider />

			<div className="p-1 md:p-2.5 w-full">
				<UserMenu />
			</div>
		</Root>
	);
}

export default memo(NavbarStyle2Content);
