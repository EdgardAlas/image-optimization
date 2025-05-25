import { UploadImagesDropzone } from '@/app/(home)/_components/upload-images-dropzone';
import { useOptimizationSettingsContext } from '@/app/(home)/_hooks/use-optimization-settings-context';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from '@/components/ui/card';
import { truncateString } from '@/lib/utils';
import { formatBytes } from 'bytes-formatter';
import clsx from 'clsx';
import { Trash } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { toast } from 'sonner';

export const ImagesToOptimize = () => {
	const form = useOptimizationSettingsContext();
	const files = form.watch('images');
	const imageButtonRef = useRef<HTMLInputElement>(null);

	return (
		<Card className='w-full flex-1 gap-2'>
			<CardHeader>
				<h2 className='font-semibold'>Images to Optimize ({files?.length})</h2>
			</CardHeader>
			<CardContent
				className={clsx({
					'h-[150px] overflow-auto': files?.length > 0,
					'h-full': files?.length === 0,
				})}
			>
				{files?.length === 0 ? (
					<UploadImagesDropzone />
				) : (
					files.map((file, index) => (
						<ImageToOptimizeItem file={file} key={index} index={index} />
					))
				)}
			</CardContent>

			{files.length > 0 ? (
				<CardFooter>
					<section className='mt-4 grid w-full grid-cols-2 gap-4 sm:grid-cols-2'>
						<Button
							type='button'
							variant='secondary'
							onClick={() => {
								imageButtonRef.current?.click();
							}}
							className='w-full'
						>
							Add More
						</Button>
						<Button
							type='button'
							variant='destructive'
							onClick={() => {
								form.setValue('images', []);
								toast.success('All images removed successfully');
							}}
							className='w-full'
						>
							Clear All
						</Button>
					</section>
				</CardFooter>
			) : null}

			<input
				ref={imageButtonRef}
				type='file'
				accept='image/*'
				className='hidden'
				onChange={(e) => {
					const files = e.target.files;
					if (files) {
						const images = form.getValues('images') || [];
						form.setValue('images', [...images, ...Array.from(files)]);
					}
				}}
				multiple
			/>
		</Card>
	);
};

type ImageToOptimizeItemProps = {
	file: File;
	index: number;
};

const ImageToOptimizeItem = ({ file, index }: ImageToOptimizeItemProps) => {
	const form = useOptimizationSettingsContext();

	const [url, setUrl] = useState<string | null>(null);

	useEffect(() => {
		if (file) {
			const objectUrl = URL.createObjectURL(file);
			setUrl(objectUrl);

			return () => {
				URL.revokeObjectURL(objectUrl);
			};
		}
	}, [file]);

	return (
		<div className='flex h-16 items-center justify-between border-b border-b-slate-200 px-4 text-xs last:border-b-0'>
			<div className='flex items-center gap-4'>
				<div
					className='h-10 w-10 rounded-full bg-slate-200'
					style={{
						backgroundImage: `url(${url})`,
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}
				/>
				<div className='flex flex-col'>
					<span className='font-bold text-slate-500'>
						{truncateString(file.name, 20)}
					</span>
					<span className='text-slate-500'>Size: {formatBytes(file.size)}</span>
				</div>
			</div>
			<Button
				type='button'
				variant={'destructive'}
				onClick={() => {
					const images = form.getValues('images') || [];
					const newImages = images.filter((_, i) => i !== index);
					form.setValue('images', newImages);
					toast.success('Image removed successfully');
				}}
			>
				<Trash size={10} />
			</Button>
		</div>
	);
};
