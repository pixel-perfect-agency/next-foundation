import { createI18nClient } from 'next-international/client';

const { useI18n, useScopedI18n, I18nProviderClient, useCurrentLocale, useChangeLocale } =
    createI18nClient({
        en: () => import('./dictionaries/en'),
        nl: () => import('./dictionaries/nl'),
    });

export {
    useI18n as useT,
    useScopedI18n as useScopedT,
    I18nProviderClient,
    useChangeLocale,
    useCurrentLocale,
};
