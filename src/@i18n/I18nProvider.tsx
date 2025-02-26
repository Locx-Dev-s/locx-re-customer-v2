import { useState, useEffect, useMemo, type ReactNode } from 'react';
import _ from 'lodash';
import useFuseSettings from '@fuse/core/FuseSettings/hooks/useFuseSettings';
import i18n from './i18n';
import I18nContext from './I18nContext';
import type { LanguageType } from './I18nContext';

type I18nProviderProps = {
	children: ReactNode;
};

const languages: LanguageType[] = [
	{ id: 'pt', title: 'Português', flag: 'BR' },
	{ id: 'en', title: 'English', flag: 'US' }
];

export function I18nProvider(props: I18nProviderProps) {
	const { children } = props;
	const { data: settings, setSettings } = useFuseSettings();
	const settingsThemeDirection = useMemo(() => settings.direction, [settings]);
	const [languageId, setLanguageId] = useState(i18n.options.lng);

	const changeLanguage = async (languageId: string) => {
		setLanguageId(languageId);
		await i18n.changeLanguage(languageId);
	};

	useEffect(() => {
		if (languageId !== i18n.options.lng) {
			i18n.changeLanguage(languageId);
		}

		const langDirection = i18n.dir(languageId);

		if (settingsThemeDirection !== langDirection) {
			setSettings({ direction: langDirection });
		}
	}, [languageId, setSettings, settingsThemeDirection]);

	return (
		<I18nContext
			value={useMemo(
				() => ({
					language: _.find(languages, { id: languageId }),
					languageId,
					langDirection: i18n.dir(languageId),
					languages,
					changeLanguage
				}),
				[languageId]
			)}
		>
			{children}
		</I18nContext>
	);
}
