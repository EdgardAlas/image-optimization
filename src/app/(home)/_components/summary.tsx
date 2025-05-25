import { Loader } from '@/app/(home)/_components/loader';
import { Metric } from '@/app/(home)/_components/metric';
import { UploadImagesDropzone } from '@/app/(home)/_components/upload-images-dropzone';
import { UploadedImageCard } from '@/app/(home)/_components/uploaded-image-card';
import { useOptimizationSettingsContext } from '@/app/(home)/_hooks/use-optimization-settings-context';
import { useOptimizerApiStore } from '@/app/(home)/_stores/optimizer-api.store';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { formatBytes } from 'bytes-formatter';
import JSZip from 'jszip';

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
						<div>
							<h2 className='font-bold'>Results</h2>
							<small className='text-xs'>
								You can click on each image to compare the original and
								optimized versions.
							</small>
						</div>
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
