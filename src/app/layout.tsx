import React from 'react';

import '~styles/global.scss';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html>
            <body>{children}</body>
        </html>
    );
};

export default RootLayout;
