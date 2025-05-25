import { Dropzone } from '@/app/(home)/_components/dropzone';
import { useOptimizationSettingsContext } from '@/app/(home)/_hooks/use-optimization-settings-context';
import { fileToBase64 } from '@/app/(home)/_lib/file-to-base64';
import React from 'react';
import { toast } from 'sonner';

export const UploadImagesDropzone = () => {
	const form = useOptimizationSettingsContext();

	return (
		<Dropzone
			maxFiles={20}
			maxSize={10 * 1024 * 1024}
			title='Upload your images'
			subtitle={'You can upload up to 20 images at once'}
			onFilesChange={async (files) => {
				const images = form.getValues('images') || [];

				if (images.length + files.length > 20) {
					toast.error('You can only upload a maximum of 20 images at once');
					return;
				}

				form.setValue('images', [...images, ...files]);

				const base64Images: string[] = [];

				for (const file of files) {
					base64Images.push(await fileToBase64(file));
				}

				form.setValue('base64Images', [
					...(form.getValues('base64Images') || []),
					...base64Images,
				]);

				toast.success(`${files.length} images added to the list!`);
			}}
			onFilesReject={() => {
				toast.error(
					'Some files were rejected. Please check the file types and sizes.'
				);
			}}
		/>
	);
};
