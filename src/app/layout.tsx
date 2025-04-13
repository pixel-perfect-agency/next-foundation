import type { Metadata } from 'next';
import { Albert_Sans } from 'next/font/google';
import type { PropsWithChildren } from 'react';

import '~styles/global.css';

import { env } from '~/env';

const AlbertSansFont = Albert_Sans({
    subsets: ['latin'],
});

const RootLayout = ({ children }: PropsWithChildren) => {
    return (
        <html className={AlbertSansFont.className} lang="en">
            <body>{children}</body>
        </html>
    );
};

export const metadata: Metadata = {
    metadataBase: new URL(env.APP_URL as string),
    title: {
        template: '%s - Next Foundation',
        default: 'Next Foundation',
    },
    description: 'A very solid foundation for scalable Next.js projects.',
    openGraph: {
        url: new URL(env.APP_URL as string),
        title: 'Next Foundation - A very solid foundation for scalable Next.js projects',
        siteName: 'Next Foundation',
        locale: 'en_US',
    },
};

export default RootLayout;
