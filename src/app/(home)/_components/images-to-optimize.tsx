import { ImageToOptimizeItem } from '@/app/(home)/_components/images-to-optimize-item';
import { UploadImagesDropzone } from '@/app/(home)/_components/upload-images-dropzone';
import { useOptimizationSettingsContext } from '@/app/(home)/_hooks/use-optimization-settings-context';
import { fileToBase64 } from '@/app/(home)/_lib/file-to-base64';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from '@/components/ui/card';
import clsx from 'clsx';
import { useRef } from 'react';
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
								form.setValue('base64Images', []);
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
				aria-hidden='true'
				onChange={async (e) => {
					const files = e.target.files;
					if (files) {
						const images = form.getValues('images') || [];
						form.setValue('images', [...images, ...Array.from(files)]);
						const base64Images: string[] = [];
						for (const file of files) {
							base64Images.push(await fileToBase64(file));
						}
						form.setValue('base64Images', [
							...(form.getValues('base64Images') || []),
							...base64Images,
						]);
					}
				}}
				multiple
			/>
		</Card>
	);
};
