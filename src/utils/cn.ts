import { createCn } from 'cn/config';

const cn = createCn({
    override: {
        conflictingClassGroups: {
            'font-size': [], // keep an earlier leading-* when a font size follows (tailwind-merge v3)
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
