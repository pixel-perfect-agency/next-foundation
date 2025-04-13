'use client';

import { type ReactNode, use } from 'react';

import { I18nProviderClient } from '~locales/client';

interface Props {
    children: ReactNode;
    params: Promise<{ locale: string }>;
}

const Layout = (props: Props) => {
    const params = use(props.params);
    const { children } = props;

    return <I18nProviderClient locale={params.locale}>{children}</I18nProviderClient>;
};

export default Layout;
