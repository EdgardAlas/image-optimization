'use client';

import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

export const ToggleDarkMode = () => {
	const { setTheme, theme } = useTheme();

	return (
		<Button
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
			aria-label='Toggle dark mode'
		>
			{theme === 'dark' ? <Sun /> : <Moon />}
		</Button>
	);
};
