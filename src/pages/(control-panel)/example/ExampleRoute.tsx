import { lazy } from 'react';
import i18next from 'i18next';

import type { FuseRouteItemType } from '@/@fuse/utils/FuseUtils';

import en from './i18n/en';
import pt from './i18n/pt';

i18next.addResourceBundle('en', 'examplePage', en);
i18next.addResourceBundle('pt', 'examplePage', pt);

const Example = lazy(() => import('./Example'));

/**
 * The Example page route.
 */
const ExampleRoute: FuseRouteItemType = {
	path: 'example',
	element: <Example />
};

export default ExampleRoute;
