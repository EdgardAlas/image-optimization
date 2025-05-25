/* eslint-disable @next/next/no-img-element */
import { OptimizedImage } from '@/app/(home)/_types/optimizer-api.types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { formatBytes } from 'bytes-formatter';
import { Download } from 'lucide-react';
import {
	ReactCompareSlider,
	ReactCompareSliderImage,
} from 'react-compare-slider';
type UploadedImageCardProps = {
	image: OptimizedImage;
};

export const UploadedImageCard = ({ image }: UploadedImageCardProps) => {
	const handleDownload = () => {
		const link = document.createElement('a');
		link.href = image.imageBase64;
		link.download = image.fileName;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return (
		<>
			<Card className='gap-0 overflow-hidden py-0'>
				<div className='bg-muted/30 flex aspect-video items-center justify-center'>
					<Dialog>
						<DialogTrigger asChild>
							<img
								src={image.imageBase64}
								alt='Image'
								className='h-[260px] w-full object-contain'
								loading='lazy'
								decoding='async'
							/>
						</DialogTrigger>
						<DialogContent className='h-[90dvh] !max-w-[90dvw]'>
							<DialogHeader>
								<DialogTitle>Optimized Image</DialogTitle>
							</DialogHeader>
							<ReactCompareSlider
								className='w-full'
								itemOne={
									<ReactCompareSliderImage
										src={image.imageBase64}
										alt='Image one'
										className='!object-contain'
									/>
								}
								itemTwo={
									<ReactCompareSliderImage
										src={image.originalImage}
										alt='Image two'
										className='!object-contain'
									/>
								}
							/>
						</DialogContent>
					</Dialog>
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
		</>
	);
};
