import { twMerge } from 'tailwind-merge';
import { type ClassValue, clsx } from 'clsx';

const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs));

export {
    cn
};