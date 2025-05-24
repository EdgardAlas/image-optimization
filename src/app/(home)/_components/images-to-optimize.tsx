import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from '@/components/ui/card';
import { Trash } from 'lucide-react';
import { toast } from 'sonner';

export const ImagesToOptimize = () => {
	return (
		<Card className='w-full flex-1 gap-2'>
			<CardHeader>
				<h2 className='font-semibold'>Images to Optimize (0)</h2>
			</CardHeader>
			<CardContent className='h-[150px] overflow-auto'>
				{Array.from({ length: 20 }, (_, i) => (
					<ImageToOptimizeItem key={i} index={i} />
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
	);
};

type ImageToOptimizeItemProps = {
	index: number;
};

const ImageToOptimizeItem = ({ index }: ImageToOptimizeItemProps) => (
	<div className='flex h-16 items-center justify-between border-b border-b-slate-200 px-4 text-xs last:border-b-0'>
		<div className='flex items-center gap-4'>
			<div className='h-10 w-10 rounded-full bg-slate-200' />
			<div className='flex flex-col'>
				<span className='font-bold text-slate-500'>Image {index + 1}</span>
				<span className='text-slate-500'>Size: 1.2 MB</span>
			</div>
		</div>
		<Button type='button' variant={'destructive'}>
			<Trash size={10} />
		</Button>
	</div>
);
