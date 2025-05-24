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
						<UploadedImageCard key={image.id} image={image} />
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

const Metric = ({
	title,
	value,
	titleClassName = '',
	valueClassName = '',
}: MetricProps) => (
	<section className='flex flex-col items-center gap-2'>
		<h4 className={clsx('text-center', titleClassName)}>{title}:</h4>
		<span className={clsx('text-xl font-bold', valueClassName)}>{value}</span>
	</section>
);

type UploadedImage = {
	id: number;
	name: string;
	originalSize?: string;
	newSize?: string;
	reduction?: string;
};

const uploadedImages: UploadedImage[] = [
	{
		id: 1,
		name: 'vacation-photo.jpg',
		originalSize: '300KB',
		newSize: '120KB',
		reduction: '60%',
	},
	{
		id: 2,
		name: 'product-image.png',
		originalSize: '500KB',
		newSize: '200KB',
		reduction: '60%',
	},
	{
		id: 3,
		name: 'profile-picture.jpg',
		originalSize: '150KB',
		newSize: '60KB',
		reduction: '60%',
	},
	{
		id: 4,
		name: 'banner-image.png',
		originalSize: '800KB',
		newSize: '320KB',
		reduction: '60%',
	},
	{
		id: 5,
		name: 'landscape.jpg',
		originalSize: '700KB',
		newSize: '280KB',
		reduction: '60%',
	},
];

type UploadedImageCardProps = {
	image: UploadedImage;
};

const UploadedImageCard = ({ image }: UploadedImageCardProps) => (
	<Card className='gap-0 overflow-hidden py-0'>
		<div className='bg-muted/30 flex aspect-video items-center justify-center'>
			<ImageIcon className='text-muted-foreground/50 h-8 w-8' />
		</div>
		<CardContent className='bg-background p-3'>
			<div className='flex items-center justify-between'>
				<p className='truncate text-sm font-medium'>{image.name}</p>
				<Badge variant='secondary' className='text-xs'>
					{image.reduction ?? 'N/A'} smaller
				</Badge>
			</div>
			<div className='text-muted-foreground mt-2 flex justify-between text-xs'>
				<span>Original: {image.originalSize ?? 'N/A'}</span>
				<span>New: {image.newSize ?? 'N/A'}</span>
			</div>
			<div className='mt-3 flex justify-end'>
				<Button variant='ghost' size='sm' className='h-7 px-2'>
					<Download className='mr-1 h-3 w-3' />
					Download
				</Button>
			</div>
		</CardContent>
	</Card>
);
