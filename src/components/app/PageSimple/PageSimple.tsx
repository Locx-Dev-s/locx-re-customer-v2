import { memo, type ReactNode, useRef } from 'react';
import clsx from 'clsx';

import { styled } from '@mui/material/styles';
import GlobalStyles from '@mui/material/GlobalStyles';
import type { SystemStyleObject } from '@mui/system/styleFunctionSx/styleFunctionSx';
import type { Theme } from '@mui/material/styles';

import FuseScrollbars, { type FuseScrollbarsProps } from '@/@fuse/core/FuseScrollbars/FuseScrollbars';

import PageSimpleHeader from './PageSimpleHeader';

const headerHeight = 120;
const toolbarHeight = 64;

/**
 * Props for the PageSimple component.
 */
type PageSimpleProps = SystemStyleObject<Theme> & {
	className?: string;
	header?: ReactNode;
	content?: ReactNode;
	scroll?: 'normal' | 'page' | 'content';
	contentScrollbarsProps?: FuseScrollbarsProps;
};

/**
 * The Root styled component is the top-level container for the PageSimple component.
 */
const Root = styled('div')<PageSimpleProps>(({ theme, ...props }) => ({
	display: 'flex',
	flexDirection: 'column',
	minWidth: 0,
	minHeight: '100%',
	position: 'relative',
	flex: '1 1 auto',
	width: '100%',
	height: 'auto',
	backgroundColor: theme.palette.background.default,

	'&.PageSimple-scroll-content': {
		height: '100%'
	},

	'& .PageSimple-wrapper': {
		display: 'flex',
		flexDirection: 'row',
		flex: '1 1 auto',
		zIndex: 2,
		minWidth: 0,
		height: '100%',
		backgroundColor: theme.palette.background.default,

		...(props.scroll === 'content' && {
			position: 'absolute',
			top: 0,
			bottom: 0,
			right: 0,
			left: 0,
			overflow: 'hidden'
		})
	},

	'& .PageSimple-header': {
		display: 'flex',
		flex: '0 0 auto',
		backgroundSize: 'cover',
		backgroundColor: theme.palette.background.default,
		borderBottom: `1px solid ${theme.palette.divider}`
	},

	'& .PageSimple-topBg': {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		height: headerHeight,
		pointerEvents: 'none'
	},

	'& .PageSimple-contentWrapper': {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		flex: '1 1 auto',
		overflow: 'hidden',
		zIndex: 9999
	},

	'& .PageSimple-toolbar': {
		height: toolbarHeight,
		minHeight: toolbarHeight,
		display: 'flex',
		alignItems: 'center'
	},

	'& .PageSimple-content': {
		display: 'flex',
		flexDirection: 'column',
		flex: '1 1 auto',
		alignItems: 'start',
		minHeight: 0,
		overflowY: 'auto',
		backgroundColor: theme.palette.background.default,
		'& > .container': {
			display: 'flex',
			flexDirection: 'column',
			minHeight: '100%'
		}
	},

	'& .PageSimple-backdrop': {
		position: 'absolute'
	}
}));

/**
 * The PageSimple component is a layout component that provides a simple page layout with a header, left sidebar, right sidebar, and content area.
 * It is designed to be used as a top-level component for an application or as a sub-component within a larger layout.
 */
function PageSimple(props: PageSimpleProps) {
	const { scroll = 'content', className, header, content, contentScrollbarsProps } = props;

	const rootRef = useRef(null);

	return (
		<>
			<GlobalStyles
				styles={() => ({
					...(scroll !== 'page' && {
						'#fuse-toolbar': {
							position: 'static'
						},
						'#fuse-footer': {
							position: 'static'
						}
					}),
					...(scroll === 'page' && {
						'#fuse-toolbar': {
							position: 'sticky',
							top: 0
						},
						'#fuse-footer': {
							position: 'sticky',
							bottom: 0
						}
					})
				})}
			/>
			<Root
				className={clsx('PageSimple-root', `PageSimple-scroll-${scroll}`, className)}
				ref={rootRef}
				scroll={scroll}
			>
				<div className="z-10 flex h-full flex-auto flex-col">
					<div className="PageSimple-wrapper">
						<div className="PageSimple-contentWrapper">
							{header && <PageSimpleHeader header={header} />}

							{content && (
								<FuseScrollbars
									enable={scroll === 'content'}
									className={clsx('PageSimple-content')}
									scrollToTopOnRouteChange
									{...contentScrollbarsProps}
								>
									<div className="container">{content}</div>
								</FuseScrollbars>
							)}
						</div>
					</div>
				</div>
			</Root>
		</>
	);
}

export default memo(PageSimple);
