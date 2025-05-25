'use client';

import { ImagesToOptimize } from '@/app/(home)/_components/images-to-optimize';
import { OptimizationSettings } from '@/app/(home)/_components/optimization-settings';
import { Summary } from '@/app/(home)/_components/summary';
import { useImageOptimizationForm } from '@/app/(home)/_hooks/use-optimization-settings-form';
import { FormProvider } from '@/components/form-provider';
import { toast } from 'sonner';

export const ImageOptimizationForm = () => {
	const { form, onSubmit } = useImageOptimizationForm();

	return (
		<>
			<FormProvider
				className='grid w-full flex-1 gap-4 lg:min-h-[730px] lg:grid-cols-12 lg:gap-8'
				form={form}
				onSubmit={onSubmit}
				onValidationError={(errors) => {
					const errorMessages = Object.values(errors).map((error) => {
						return error.message;
					});

					toast.error(errorMessages[0]);
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
