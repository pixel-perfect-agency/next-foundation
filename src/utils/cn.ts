import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

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
const cn = (...inputs: ClassValue[]) => {
    return twMerge(clsx(inputs));
};

export default cn;
