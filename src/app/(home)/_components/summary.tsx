import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import clsx from 'clsx';
import { Download, ImageIcon } from 'lucide-react';
import React from 'react';

export const Summary = () => {
	return (
		<Card className='col-span-12 max-h-[730px] overflow-y-auto lg:col-span-8'>
			<CardHeader className='flex items-center justify-between'>
				<h2 className='font-bold'>Results</h2>
				<Button>Download All</Button>
			</CardHeader>
			<CardContent className='space-y-8'>
				<article className='bg-background text-foreground rounded-xl border'>
					<header className='border-b p-4'>
						<h3 className='font-bold'>Optimization Summary</h3>
					</header>
					<section className='grid gap-4 p-4 sm:grid-cols-2 md:grid-cols-4'>
						<Metric title='Original size' value='2.5 MB' />
						<Metric title='Optimized size' value='1.2 MB' />
						<Metric
							title='Reduction'
							value='52%'
							valueClassName='text-green-700'
						/>
						<Metric title='Total images' value={10} />
					</section>
				</article>

				<div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
					{uploadedImages.map((image) => (
						<Card key={image.id} className='gap-0 overflow-hidden py-0'>
							<div className='bg-muted/30 flex aspect-video items-center justify-center'>
								<ImageIcon className='text-muted-foreground/50 h-8 w-8' />
							</div>
							<CardContent className='bg-background p-3'>
								<div className='flex items-center justify-between'>
									<p className='truncate text-sm font-medium'>{image.name}</p>
									<Badge variant='secondary' className='text-xs'>
										83% smaller
									</Badge>
								</div>
								<div className='text-muted-foreground mt-2 flex justify-between text-xs'>
									<span>Original: 300KB</span>
									<span>New: 300KB</span>
								</div>
								<div className='mt-3 flex justify-end'>
									<Button variant='ghost' size='sm' className='h-7 px-2'>
										<Download className='mr-1 h-3 w-3' />
										Download
									</Button>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</CardContent>
		</Card>
	);
};

type MetricProps = {
	title: string;
	value: React.ReactNode;
	titleClassName?: string;
	valueClassName?: string;
};

const Metric: React.FC<MetricProps> = ({
	title,
	value,
	titleClassName = '',
	valueClassName = '',
}) => (
	<section className='flex flex-col items-center gap-2'>
		<h4 className={clsx('text-center', titleClassName)}>{title}:</h4>
		<span className={clsx('text-xl font-bold', valueClassName)}>{value}</span>
	</section>
);

const uploadedImages = [
	{ id: 1, name: 'vacation-photo.jpg' },
	{ id: 2, name: 'product-image.png' },
	{ id: 3, name: 'profile-picture.jpg' },
	{ id: 4, name: 'banner-image.png' },
	{ id: 5, name: 'landscape.jpg' },
];
