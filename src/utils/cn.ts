import { createCn } from 'cn/config';

/**
 * Keep the tailwind-merge v3 rule: a later font size (`text-sm`) keeps an earlier `leading-*`.
 * The default `cn` config drops it, which would change the line height
 * wherever a `leading-*` class comes before a font size.
 */
const cn = createCn({
    override: {
        conflictingClassGroups: {
            'font-size': [],
        },
    },
});

/**
 * ClassName utility function for merging Tailwind classes with clsx.
 *
 * @param inputs - The Tailwind classes to merge.
 * @example
 * <div className={cn('text-gray-500', {
 *    'text-red-500': isError,
 * })} />
 *
 */
export default cn;
