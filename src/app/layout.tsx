import clsx from 'clsx';
import type { Metadata } from 'next';
import { Geist_Mono } from 'next/font/google';
import './globals.css';

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
		<html lang='en'>
			<body className={clsx(fontFamily.className, `antialiased`)}>
				{children}
			</body>
		</html>
	);
}
