import clsx from 'clsx';
import type { Metadata } from 'next';
import { Geist_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';
import { Toaster } from '@/components/ui/sonner';
import Script from 'next/script';

const fontFamily = Geist_Mono({
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Image Optimizer',
	description: 'Optimize your images easily and quickly',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={clsx(fontFamily.className, `antialiased`)}>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
				<Toaster />

				<Script
					defer
					src='https://analytics.jocotesv.com/script.js'
					data-website-id='716ddd22-e1d6-417e-91ab-1584d3ce1740'
				/>
			</body>
		</html>
	);
}
