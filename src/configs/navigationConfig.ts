import i18n from '@i18n';
import type { FuseNavItemType } from '@fuse/core/FuseNavigation/types/FuseNavItemType';

import en from './navigation-i18n/en';
import pt from './navigation-i18n/pt';

i18n.addResourceBundle('en', 'navigation', en);
i18n.addResourceBundle('pt', 'navigation', pt);

/**
 * The navigationConfig object is an array of navigation items for the Fuse application.
 */
const navigationConfig: FuseNavItemType[] = [
	{
		id: 'example-component',
		title: 'Example',
		translate: 'EXAMPLE',
		type: 'item',
		icon: 'heroicons-outline:star',
		url: 'example'
	}
];

export default navigationConfig;
