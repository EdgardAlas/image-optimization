import { Dropzone } from '@/app/(home)/_components/dropzone';
import { useOptimizationSettingsContext } from '@/app/(home)/_hooks/use-optimization-settings-context';
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
			onFilesChange={(files) => {
				const images = form.getValues('images') || [];

				if (images.length + files.length > 20) {
					toast.error('You can only upload a maximum of 20 images at once');
					return;
				}

				form.setValue('images', [...images, ...files]);
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
