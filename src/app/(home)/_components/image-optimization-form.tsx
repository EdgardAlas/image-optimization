'use client';

import { OptimizationSettings } from '@/app/(home)/_components/optimization-settings';
import {
	optimizationSettingsSchemaResolver,
	OptimizationSettingsType,
} from '@/app/(home)/_lib/optimization-settings.schema';
import { FormProvider } from '@/components/form-provider';
import { Card, CardContent } from '@/components/ui/card';
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
		},
		resolver: optimizationSettingsSchemaResolver,
	});

	return (
		<FormProvider
			className='grid w-full flex-1 gap-4 lg:min-h-[725px] lg:grid-cols-12 lg:gap-8'
			form={form}
			onSubmit={async (values) => {
				// Handle form submission
				console.log('Form submitted:', values);
			}}
		>
			<section className='col-span-12 flex flex-col gap-4 lg:col-span-4 lg:gap-8'>
				<Card className='w-full flex-1'>
					<CardContent className='h-[200px] lg:h-auto'></CardContent>
				</Card>

				<OptimizationSettings />
			</section>
			<section className='col-span-12 max-h-[725px] overflow-y-auto lg:col-span-8'>
				<Card className='h-full w-full'>
					<CardContent>
						<h2 className='font-bold'>Summary of optimized images</h2>
					</CardContent>
				</Card>
			</section>
		</FormProvider>
	);
};
