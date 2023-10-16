import { createI18nMiddleware } from 'next-international/middleware';
import { type NextRequest } from 'next/server';

const I18nMiddleware = createI18nMiddleware({
    locales: ['en', 'nl'],
    defaultLocale: 'en',
    urlMappingStrategy: 'rewriteDefault',
});

export const middleware = (request: NextRequest) => {
    return I18nMiddleware(request);
};

export const config = {
    matcher: ['/((?!api|assets|static|.*\\..*|_next|favicon.ico|robots.txt).*)'],
};
