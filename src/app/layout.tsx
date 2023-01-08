// Package imports
import React from 'react';

// Style imports
import '@styles/global.scss';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html>
            <body>{children}</body>
        </html>
    );
};

export default RootLayout;
