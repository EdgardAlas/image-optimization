import { optimizeImages } from '@/app/(home)/_api/optimizer.api';
import { jsonToFormData } from '@/app/(home)/_lib/json-to-form-data';
import {
	optimizationSettingsSchemaResolver,
	OptimizationSettingsType,
} from '@/app/(home)/_lib/optimization-settings.schema';
import { useOptimizerApiStore } from '@/app/(home)/_stores/optimizer-api.store';
import { AxiosError } from 'axios';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

export const useImageOptimizationForm = () => {
	const { setResponse } = useOptimizerApiStore();

	const form = useForm<OptimizationSettingsType>({
		defaultValues: {
			quality: 80,
			outputFormat: 'jpg',
			preserveFileName: true,
			maxWidth: 800,
			maxHeight: 800,
			resizeMode: 'contain',
			modifyDimensions: false,
			removeMetadata: false,
			images: [],
		},
		resolver: optimizationSettingsSchemaResolver,
	});

	const onSubmit = async ({
		base64Images,
		...values
	}: OptimizationSettingsType) => {
		const formData = jsonToFormData(values);

		const id = toast.loading('Optimizing images...');

		try {
			setResponse(null);
			const response = await optimizeImages(formData);
			setResponse({
				...response.data,
				images: response.data.images.map((image, i) => ({
					...image,
					originalImage: base64Images?.[i] as string,
				})),
			});

			toast.success('Images optimized successfully', { id });
		} catch (error) {
			if (error instanceof AxiosError) {
				const message = error.response?.data?.message;

				if (Array.isArray(message)) {
					toast.error(message[0], { id });
					return;
				}

				toast.error(message, { id });

				return;
			}

			toast.error('An error occurred while optimizing images', {
				id,
			});
		}
	};

	return {
		form,
		onSubmit,
	};
};
