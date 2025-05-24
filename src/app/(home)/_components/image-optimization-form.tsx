'use client';

import { OptimizationSettings } from '@/app/(home)/_components/optimization-settings';
import { Summary } from '@/app/(home)/_components/summary';
import {
	optimizationSettingsSchemaResolver,
	OptimizationSettingsType,
} from '@/app/(home)/_lib/optimization-settings.schema';
import { FormProvider } from '@/components/form-provider';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from '@/components/ui/card';
import { Trash } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

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
			className='grid w-full flex-1 gap-4 lg:min-h-[730px] lg:grid-cols-12 lg:gap-8'
			form={form}
			onSubmit={async (values) => {
				// Handle form submission
				console.log('Form submitted:', values);
			}}
		>
			<section className='col-span-12 flex flex-col gap-4 lg:col-span-4 lg:gap-8'>
				<Card className='w-full flex-1 gap-2'>
					<CardHeader>
						<h2 className='font-semibold'>Images to Optimize (0)</h2>
					</CardHeader>
					<CardContent className='h-[150px] overflow-auto'>
						{Array.from({ length: 20 }, (_, i) => (
							<div
								key={i}
								className='flex h-16 items-center justify-between border-b border-b-slate-200 px-4 text-xs last:border-b-0'
							>
								<div className='flex items-center gap-4'>
									<div className='h-10 w-10 rounded-full bg-slate-200' />
									<div className='flex flex-col'>
										<span className='font-bold text-slate-500'>
											Image {i + 1}
										</span>
										<span className='text-slate-500'>Size: 1.2 MB</span>
									</div>
								</div>
								<Button type='button' variant={'destructive'}>
									<Trash size={10} />
								</Button>
							</div>
						))}
					</CardContent>
					<CardFooter>
						<section className='mt-4 grid w-full grid-cols-2 gap-4 sm:grid-cols-2'>
							<Button
								type='button'
								variant='secondary'
								onClick={() => {
									toast.error('This feature is not yet implemented.');
								}}
								className='w-full'
							>
								Add More
							</Button>
							<Button
								type='button'
								variant='destructive'
								onClick={() => {
									toast.error('This feature is not yet implemented.');
								}}
								className='w-full'
							>
								Clear All
							</Button>
						</section>
					</CardFooter>
				</Card>

				<OptimizationSettings />
			</section>

			<Summary />
		</FormProvider>
	);
};
