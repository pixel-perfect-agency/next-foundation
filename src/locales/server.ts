import { createI18nServer } from 'next-international/server';

const { getI18n, getScopedI18n, getStaticParams, getCurrentLocale } = createI18nServer({
    en: () => import('./dictionaries/en'),
    nl: () => import('./dictionaries/nl'),
});

export { getI18n as getT, getScopedI18n as getScopedT, getStaticParams, getCurrentLocale };
