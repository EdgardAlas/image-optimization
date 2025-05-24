'use client';

import { ImagesToOptimize } from '@/app/(home)/_components/images-to-optimize';
import { OptimizationSettings } from '@/app/(home)/_components/optimization-settings';
import { Summary } from '@/app/(home)/_components/summary';
import {
	optimizationSettingsSchemaResolver,
	OptimizationSettingsType,
} from '@/app/(home)/_lib/optimization-settings.schema';
import { FormProvider } from '@/components/form-provider';
import { useForm } from 'react-hook-form';

export const ImageOptimizationForm = () => {
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

	return (
		<>
			<FormProvider
				className='grid w-full flex-1 gap-4 lg:min-h-[730px] lg:grid-cols-12 lg:gap-8'
				form={form}
				onSubmit={async (values) => {
					// Handle form submission
					console.log('Form submitted:', values);
				}}
			>
				<section className='col-span-12 flex flex-col gap-4 lg:col-span-4 lg:gap-8'>
					<ImagesToOptimize />

					<OptimizationSettings />
				</section>

				<Summary />
			</FormProvider>
		</>
	);
};
