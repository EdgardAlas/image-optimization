'use client';

import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Search } from 'lucide-react';

export default function NotFound() {
	return (
		<div className='text-foreground flex min-h-screen items-center justify-center px-4'>
			<Card className='w-full max-w-lg text-center'>
				<CardHeader className='pb-4'>
					<div className='mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-red-100'>
						<Search className='h-10 w-10 text-red-600' />
					</div>
					<CardTitle className='text-6xl font-bold'>404</CardTitle>
					<CardDescription className='text-xl'>Page Not Found</CardDescription>
				</CardHeader>
				<CardContent className='space-y-4'>
					<p>
						Sorry, we couldn&apos;t find the page you&apos;re looking for. It
						might have been moved, deleted, or you entered the wrong URL.
					</p>
					<div className='flex flex-col justify-center gap-3 sm:flex-row'>
						<Button
							onClick={() => window.history.back()}
							className='w-full sm:w-auto'
						>
							Go Back
						</Button>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
