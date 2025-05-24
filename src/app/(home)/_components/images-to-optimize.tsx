import { OptimizationSettingsType } from '@/app/(home)/_lib/optimization-settings.schema';
import { Button } from '@/components/ui/button';
import { formatBytes } from 'bytes-formatter';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from '@/components/ui/card';
import { truncateString } from '@/lib/utils';
import { Trash } from 'lucide-react';
import { useFormContext } from 'react-hook-form';
import { toast } from 'sonner';
import clsx from 'clsx';

export const ImagesToOptimize = () => {
	const form = useFormContext<OptimizationSettingsType>();
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
					<div className='flex h-full items-center justify-center'>
						<p className='text-sm text-slate-500'>No images to optimize</p>
					</div>
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
