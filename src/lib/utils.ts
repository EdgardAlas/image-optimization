import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function truncateString(
	str: string,
	length: number,
	suffix: string = '...',
	preserveWords: boolean = false
) {
	if (str.length <= length) return str;

	if (preserveWords) {
		const words = str.split(' ');
		let truncated = '';

		for (const word of words) {
			if (truncated.length + word.length + suffix.length > length) break;
			truncated += `${word} `;
		}

		return truncated.trim() + suffix;
	}

	return str.slice(0, length - suffix.length) + suffix;
}
