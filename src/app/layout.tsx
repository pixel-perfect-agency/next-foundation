import { Albert_Sans } from 'next/font/google';

interface Props {
    children: React.ReactNode;
}

const AlbertSansFont = Albert_Sans({
    subsets: ['latin'],
});

const RootLayout = ({ children }: Props) => {
    return (
        <html className={AlbertSansFont.className}>
            <body>{children}</body>
        </html>
    );
};

export default RootLayout;
