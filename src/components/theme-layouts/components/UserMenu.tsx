import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover/Popover';
import Link from '@/@fuse/core/Link';
import FuseSvgIcon from '@/@fuse/core/FuseSvgIcon';
import useUser from '@/@auth/useUser';
import { Badge, IconButton } from '@mui/material';

/**
 * The user menu.
 */
function UserMenu() {
	const { data: user, signOut, isGuest } = useUser();
	const [userMenu, setUserMenu] = useState<HTMLElement | null>(null);
	const userMenuClick = (event: React.MouseEvent<HTMLElement>) => {
		setUserMenu(event.currentTarget);
	};

	const userMenuClose = () => {
		setUserMenu(null);
	};

	if (!user) {
		return null;
	}

	return (
		<>
			<div
				className="user-menu flex justify-between items-center gap-1 shrink-0 min-h-14 h-14 p-2 space-x-3"
				color="inherit"
			>
				{user?.photoURL ? (
					<Avatar
						src={user?.photoURL}
						alt="user photo"
					/>
				) : (
					<Avatar alt="user photo">{user?.displayName?.[0]}</Avatar>
				)}
				<div className="user-menu-info flex flex-col flex-auto space-y-2">
					<Typography
						component="span"
						className="title flex text-sm capitalize truncate tracking-tight leading-none"
					>
						{user?.displayName}
					</Typography>
				</div>
				<div className="user-menu-actions flex shrink-0 items-center space-x-2">
					<IconButton
						onClick={() => {}}
						size="large"
					>
						<Badge
							badgeContent={10}
							color="primary"
						>
							<FuseSvgIcon
								className="arrow"
								size={16}
							>
								heroicons-outline:bell-alert
							</FuseSvgIcon>
						</Badge>
					</IconButton>
					<IconButton
						onClick={userMenuClick}
						size="large"
					>
						<FuseSvgIcon
							className="arrow"
							size={16}
						>
							heroicons-outline:chevron-down
						</FuseSvgIcon>
					</IconButton>
				</div>
			</div>
			<Popover
				open={Boolean(userMenu)}
				anchorEl={userMenu}
				onClose={userMenuClose}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'center'
				}}
				transformOrigin={{
					vertical: 'bottom',
					horizontal: 'center'
				}}
				classes={{
					paper: 'min-w-40'
				}}
			>
				{isGuest ? (
					<>
						<MenuItem
							component={Link}
							to="/sign-in"
							role="button"
						>
							<ListItemIcon className="min-w-9">
								<FuseSvgIcon>heroicons-outline:lock-closed</FuseSvgIcon>
							</ListItemIcon>
							<ListItemText primary="Sign In" />
						</MenuItem>
						<MenuItem
							component={Link}
							to="/sign-up"
							role="button"
						>
							<ListItemIcon className="min-w-9">
								<FuseSvgIcon>heroicons-outline:user-plus</FuseSvgIcon>
							</ListItemIcon>
							<ListItemText primary="Sign up" />
						</MenuItem>
					</>
				) : (
					<MenuItem
						onClick={() => {
							signOut();
						}}
					>
						<ListItemIcon className="min-w-9">
							<FuseSvgIcon>heroicons-outline:arrow-right-on-rectangle</FuseSvgIcon>
						</ListItemIcon>
						<ListItemText primary="Sair" />
					</MenuItem>
				)}
			</Popover>
		</>
	);
}

export default UserMenu;
