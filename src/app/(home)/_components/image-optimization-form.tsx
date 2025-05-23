'use client';

import { OptimizationSettings } from '@/app/(home)/_components/optimization-settings';
import { Card, CardContent } from '@/components/ui/card';

export const ImageOptimizationForm = () => {
	return (
		<section className='grid w-full flex-1 gap-4 lg:min-h-[725px] lg:grid-cols-12 lg:gap-8'>
			<section className='col-span-12 grid gap-4 lg:col-span-4 lg:gap-8'>
				<section>
					<Card className='h-full w-full'>
						<CardContent>Image Uploader</CardContent>
					</Card>
				</section>
				<section>
					<OptimizationSettings />
				</section>
			</section>
			<section className='col-span-12 max-h-[725px] overflow-y-auto lg:col-span-8'>
				<Card className='h-full w-full'>
					<CardContent>Summary of optimized images</CardContent>
				</Card>
			</section>
		</section>
	);
};
