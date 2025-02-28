import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import SnackbarContent from '@mui/material/SnackbarContent';
import Typography from '@mui/material/Typography';
import { memo } from 'react';
import {
	hideMessage,
	selectFuseMessageOptions,
	selectFuseMessageState
} from '@/@fuse/core/FuseMessage/fuseMessageSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import FuseSvgIcon from '../FuseSvgIcon';

export type FuseMessageVariantType = 'success' | 'error' | 'warning' | 'info';

type StyledSnackbarProps = {
	variant?: FuseMessageVariantType;
};

const StyledSnackbar = styled(Snackbar)<StyledSnackbarProps>(({ theme }) => ({
	'& .FuseMessage-content': {},
	variants: [
		{
			props: {
				variant: 'success'
			},
			style: {
				'& .FuseMessage-content': {
					backgroundColor: 'var(--color-success-200)',
					color: theme.palette.success.dark
				}
			}
		},
		{
			props: {
				variant: 'error'
			},
			style: {
				'& .FuseMessage-content': {
					backgroundColor: 'var(--color-danger-200)',
					color: theme.palette.error.dark
				}
			}
		},
		{
			props: {
				variant: 'info'
			},
			style: {
				'& .FuseMessage-content': {
					backgroundColor: 'var(--color-info-200)',
					color: theme.palette.info.dark
				}
			}
		},
		{
			props: {
				variant: 'warning'
			},
			style: {
				'& .FuseMessage-content': {
					backgroundColor: 'var(--color-warning-200)',
					color: theme.palette.warning.dark
				}
			}
		}
	]
}));

const variantIcon = {
	success: 'heroicons-outline:check-badge',
	warning: 'heroicons-outline:exclamation-circle',
	error: 'heroicons-outline:exclamation-circle',
	info: 'heroicons-outline:exclamation-triangle'
};

/**
 * FuseMessage
 * The FuseMessage component holds a snackbar that is capable of displaying message with 4 different variant. It uses the @mui/material React packages to create the components.
 */
function FuseMessage() {
	const dispatch = useAppDispatch();
	const state = useAppSelector(selectFuseMessageState);
	const options = useAppSelector(selectFuseMessageOptions);

	return (
		<StyledSnackbar
			{...options}
			open={state}
			onClose={() => dispatch(hideMessage())}
		>
			<SnackbarContent
				className="FuseMessage-content"
				message={
					<div className="flex items-center">
						{variantIcon[options.variant] && (
							<FuseSvgIcon
								color="inherit"
								size={16}
							>
								{variantIcon[options.variant]}
							</FuseSvgIcon>
						)}
						<Typography className="mx-2 text-sm font-bold">{options.message}</Typography>
					</div>
				}
				action={[
					<IconButton
						key="close"
						aria-label="Close"
						color="inherit"
						onClick={() => dispatch(hideMessage())}
						size="large"
					>
						<FuseSvgIcon>heroicons-outline:x-mark</FuseSvgIcon>
					</IconButton>
				]}
			/>
		</StyledSnackbar>
	);
}

export default memo(FuseMessage);
