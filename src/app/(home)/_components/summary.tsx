/* eslint-disable @next/next/no-img-element */
import { UploadImagesDropzone } from '@/app/(home)/_components/upload-images-dropzone';
import { useOptimizationSettingsContext } from '@/app/(home)/_hooks/use-optimization-settings-context';
import { useOptimizerApiStore } from '@/app/(home)/_stores/optimizer-api.store';
import { OptimizedImage } from '@/app/(home)/_types/optimizer-api.types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { formatBytes } from 'bytes-formatter';
import clsx from 'clsx';
import JSZip from 'jszip';
import { Download } from 'lucide-react';

export const Summary = () => {
	const response = useOptimizerApiStore((state) => state.response);
	const form = useOptimizationSettingsContext();

	const handleDownloadAll = async () => {
		if (!response) return;

		const zip = new JSZip();

		response.images.forEach((image) => {
			const base64 = image.imageBase64.split(',')[1];
			zip.file(image.fileName, base64, { base64: true });
		});

		const blob = await zip.generateAsync({ type: 'blob' });

		const link = document.createElement('a');
		link.href = URL.createObjectURL(blob);
		link.download = 'optimized-images.zip';
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	if (form.formState.isSubmitting) {
		return <Loader />;
	}

	return (
		<Card className='col-span-12 max-h-[730px] overflow-y-auto lg:col-span-8'>
			{!response ? (
				<CardContent className='h-full'>
					<UploadImagesDropzone />
				</CardContent>
			) : null}

			{response ? (
				<>
					<CardHeader className='flex items-center justify-between'>
						<h2 className='font-bold'>Results</h2>
						<Button type='button' onClick={handleDownloadAll}>
							Download All
						</Button>
					</CardHeader>
					<CardContent className='space-y-8'>
						<article className='bg-background text-foreground rounded-xl border'>
							<header className='border-b p-4'>
								<h3 className='font-bold'>Optimization Summary</h3>
							</header>
							<section className='grid gap-4 p-4 sm:grid-cols-2 md:grid-cols-4'>
								<Metric
									title='Original size'
									value={formatBytes(response.originalSize)}
								/>
								<Metric
									title='Optimized size'
									value={formatBytes(response.optimizedSize)}
								/>
								<Metric
									title='Reduction'
									value={response.reduction.toFixed(2) + '%'}
									valueClassName='text-green-700'
								/>
								<Metric title='Total images' value={response.totalImages} />
							</section>
						</article>

						<div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
							{response.images.map((image, key) => (
								<UploadedImageCard key={key} image={image} />
							))}
						</div>
					</CardContent>
				</>
			) : null}
		</Card>
	);
};

type MetricProps = {
	title: string;
	value: string | number;
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

type UploadedImageCardProps = {
	image: OptimizedImage;
};

const UploadedImageCard = ({ image }: UploadedImageCardProps) => {
	const handleDownload = () => {
		const link = document.createElement('a');
		link.href = image.imageBase64;
		link.download = image.fileName;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return (
		<Card className='gap-0 overflow-hidden py-0'>
			<div className='bg-muted/30 flex aspect-video items-center justify-center'>
				<img
					src={image.imageBase64}
					alt={image.fileName}
					className='h-[260px] w-full object-contain'
				/>
			</div>
			<CardContent className='bg-background p-3'>
				<div className='flex items-center justify-between'>
					<p className='truncate text-sm font-medium'>{image.fileName}</p>
					<Badge variant='secondary' className='text-xs'>
						{image.reduction ? image.reduction.toFixed(2) + '%' : 'N/A'}
					</Badge>
				</div>
				<div className='text-muted-foreground mt-2 flex justify-between text-xs'>
					<span>
						Original:{' '}
						{image.originalSize ? formatBytes(image.originalSize) : 'N/A'}
					</span>
					<span>
						New:{' '}
						{image.optimizedSize ? formatBytes(image.optimizedSize) : 'N/A'}
					</span>
				</div>
				<div className='mt-3 flex justify-end'>
					<Button
						variant='ghost'
						size='sm'
						className='h-7 px-2'
						type='button'
						onClick={handleDownload}
					>
						<Download className='mr-1 h-3 w-3' />
						Download
					</Button>
				</div>
			</CardContent>
		</Card>
	);
};

const Loader = () => (
	<Card className='col-span-12 max-h-[730px] overflow-y-auto lg:col-span-8'>
		<CardContent className='h-full'>
			<div className='flex h-full items-center justify-center'>
				<svg
					className='animate-spin'
					width='48'
					height='48'
					viewBox='0 0 48 48'
					fill='none'
					aria-label='Loading'
					xmlns='http://www.w3.org/2000/svg'
				>
					<circle
						className='stroke-foreground opacity-25'
						cx='24'
						cy='24'
						r='20'
						strokeWidth='6'
						fill='none'
					/>
					<path
						className='stroke-foreground opacity-75'
						d='M44 24c0-11.046-8.954-20-20-20'
						strokeWidth='6'
						strokeLinecap='round'
					/>
				</svg>
			</div>
		</CardContent>
	</Card>
);
