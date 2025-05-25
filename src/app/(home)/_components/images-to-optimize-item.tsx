import { useOptimizationSettingsContext } from '@/app/(home)/_hooks/use-optimization-settings-context';
import { Button } from '@/components/ui/button';
import { truncateString } from '@/lib/utils';
import { formatBytes } from 'bytes-formatter';
import { Trash } from 'lucide-react';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

type ImageToOptimizeItemProps = {
	file: File;
	index: number;
};

export const ImageToOptimizeItem = ({
	file,
	index,
}: ImageToOptimizeItemProps) => {
	const form = useOptimizationSettingsContext();

	const [url, setUrl] = useState<string | null>(null);

	useEffect(() => {
		if (file) {
			const objectUrl = URL.createObjectURL(file);
			setUrl(objectUrl);

			return () => {
				URL.revokeObjectURL(objectUrl);
			};
		}
	}, [file]);

	return (
		<div className='flex h-16 items-center justify-between border-b border-b-slate-200 px-4 text-xs last:border-b-0'>
			<div className='flex items-center gap-4'>
				<div
					className='h-10 w-10 rounded-full bg-slate-200'
					style={{
						backgroundImage: `url(${url})`,
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}
				/>
				<div className='flex flex-col'>
					<span className='font-bold text-slate-500'>
						{truncateString(file.name, 20)}
					</span>
					<span className='text-slate-500'>Size: {formatBytes(file.size)}</span>
				</div>
			</div>
			<Button
				type='button'
				variant={'destructive'}
				onClick={() => {
					const images = form.getValues('images') || [];
					const newImages = images.filter((_, i) => i !== index);
					form.setValue('images', newImages);
					const base64Images = form.getValues('base64Images') || [];
					const newBase64Images = base64Images.filter((_, i) => i !== index);
					form.setValue('base64Images', newBase64Images);
					toast.success('Image removed successfully');
				}}
			>
				<Trash size={10} />
			</Button>
		</div>
	);
};
