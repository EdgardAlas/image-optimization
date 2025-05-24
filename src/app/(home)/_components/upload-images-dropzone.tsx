import { Dropzone } from '@/app/(home)/_components/dropzone';
import { useOptimizationSettingsForm } from '@/app/(home)/_hooks/use-optimization-settings-form';
import React from 'react';
import { toast } from 'sonner';

export const UploadImagesDropzone = () => {
	const form = useOptimizationSettingsForm();

	return (
		<Dropzone
			title='Upload your images'
			subtitle={'You can upload up to 20 images at once'}
			onFilesChange={(files) => {
				const images = form.getValues('images') || [];
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
