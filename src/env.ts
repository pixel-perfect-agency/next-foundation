import { createEnv } from '@t3-oss/env-nextjs';
import * as v from 'valibot';

const env = createEnv({
    client: {
        NEXT_PUBLIC_URL: v.optional(
            v.pipe(
                v.string(),
                v.nonEmpty('Please enter your url.'),
                v.url('The url is badly formatted.'),
            ),
        ),
    },
    // Since Next.js 13.4.4 or later, only client variables need to be specified.
    experimental__runtimeEnv: {
        NEXT_PUBLIC_URL:
            process.env.NEXT_PUBLIC_URL ??
            process.env.APP_URL ??
            (process.env.VERCEL_URL
                ? `https://${process.env.VERCEL_URL}`
                : `http://localhost:${process.env.PORT ?? 3000}`),
    },
});

export { env };
