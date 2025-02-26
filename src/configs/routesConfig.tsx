// Dynamically import all *ConfigConfig.tsx files from the app folder
import { Navigate } from 'react-router';
import FuseLoading from '@fuse/core/FuseLoading';
import ErrorBoundary from '@fuse/utils/ErrorBoundary';
import type { FuseRouteConfigType, FuseRoutesType } from '@fuse/utils/FuseUtils';

import App from '@/App';
import Error404Page from '@/pages/(public)/404/Error404Page';
import Error401Page from '@/pages/(public)/401/Error401Page';

import { layoutConfigOnlyMain } from './layoutConfigTemplates';
import settingsConfig from './settingsConfig';

const configModules: Record<string, unknown> = import.meta.glob('/src/pages/**/*Route.tsx', {
	eager: true
});

const mainRoutes: FuseRouteConfigType[] = Object.keys(configModules).flatMap((modulePath) => {
	const moduleConfigs = (configModules[modulePath] as { default: FuseRouteConfigType | FuseRouteConfigType[] })
		.default;
	return Array.isArray(moduleConfigs) ? moduleConfigs : [moduleConfigs];
});

const routes: FuseRoutesType = [
	{
		path: '/',
		element: <App />,
		auth: settingsConfig.defaultAuth,
		errorElement: <ErrorBoundary />,
		children: [
			{
				path: '/',
				element: <Navigate to="/example" />
			},
			...mainRoutes,
			{
				path: 'loading',
				element: <FuseLoading />,
				settings: { layout: layoutConfigOnlyMain }
			},
			{
				path: '401',
				element: <Error401Page />
			},
			{
				path: '404',
				element: <Error404Page />,
				settings: { layout: layoutConfigOnlyMain },
				auth: null
			}
		]
	},
	{
		path: '*',
		element: <Navigate to="/404" />
	}
];

export default routes;
