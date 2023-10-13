'use client';

import { type ReactNode } from 'react';

import { I18nProviderClient } from '~locales/client';

interface Props {
    children: ReactNode;
    params: { locale: string };
}

const Layout = ({ children, params }: Props) => {
    return <I18nProviderClient locale={params.locale}>{children}</I18nProviderClient>;
};

export default Layout;
