import { useTranslation } from 'react-i18next';

import PageSimple from '@/components/app/PageSimple';
import DemoContent from '@fuse/core/DemoContent';

function Example() {
	const { t } = useTranslation('examplePage');

	return (
		<PageSimple
			header={
				<div className="p-6">
					<h4>{t('TITLE')}</h4>
				</div>
			}
			content={
				<div className="h-full p-6">
					<h4>Content</h4>
					<br />
					<DemoContent />
				</div>
			}
		/>
	);
}

export default Example;
