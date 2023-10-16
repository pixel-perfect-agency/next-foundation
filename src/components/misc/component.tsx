'use client';

import { useChangeLocale, useCurrentLocale, useT } from '~locales/client';
import cn from '~utils/cn';

const Component = () => {
    const t = useT();
    const changeLocale = useChangeLocale();
    const currentLocale = useCurrentLocale();

    return (
        <div className="my-4 p-4 border border-gray-200 rounded-lg w-fit">
            <h2 className="text-xl font-semibold">Hello World!</h2>
            <p>
                {t('component.location')}{' '}
                <span className="bg-gray-200 px-2 py-1 text-sm rounded-md">
                    src/components/misc/component.tsx
                </span>
            </p>
            <div className="mt-4 flex gap-4">
                {t('change-locale')}:
                <div className="flex gap-2">
                    <button
                        className={cn('bg-gray-200 px-2 py-1 text-sm rounded-md', {
                            'bg-blue-500 text-white': currentLocale === 'en',
                        })}
                        onClick={() => changeLocale('en')}>
                        en
                    </button>
                    <button
                        className={cn('bg-gray-200 px-2 py-1 text-sm rounded-md', {
                            'bg-blue-500 text-white': currentLocale === 'nl',
                        })}
                        onClick={() => changeLocale('nl')}>
                        nl
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Component;
