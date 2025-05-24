import { Dropzone } from '@/app/(home)/_components/dropzone';
import { useOptimizationSettingsForm } from '@/app/(home)/_hooks/use-optimization-settings-form';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from '@/components/ui/card';
import { imageFormats } from '@/data/image-formats';
import { truncateString } from '@/lib/utils';
import { formatBytes } from 'bytes-formatter';
import clsx from 'clsx';
import { Trash } from 'lucide-react';
import { toast } from 'sonner';

export const ImagesToOptimize = () => {
	const form = useOptimizationSettingsForm();
	const files = form.watch('images');

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
					<Dropzone
						title='Upload your images'
						subtitle={`Accepted formats: ${imageFormats
							.map((format) => format.extension)
							.join(', ')}`}
					/>
				) : (
					files.map((file, index) => (
						<ImageToOptimizeItem file={file} key={index} />
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
			) : null}
		</Card>
	);
};

type ImageToOptimizeItemProps = {
	file: File;
};

const ImageToOptimizeItem = ({ file }: ImageToOptimizeItemProps) => (
	<div className='flex h-16 items-center justify-between border-b border-b-slate-200 px-4 text-xs last:border-b-0'>
		<div className='flex items-center gap-4'>
			<div className='h-10 w-10 rounded-full bg-slate-200' />
			<div className='flex flex-col'>
				<span className='font-bold text-slate-500'>
					{truncateString(file.name, 20)}
				</span>
				<span className='text-slate-500'>Size: {formatBytes(file.size)}</span>
			</div>
		</div>
		<Button type='button' variant={'destructive'}>
			<Trash size={10} />
		</Button>
	</div>
);
