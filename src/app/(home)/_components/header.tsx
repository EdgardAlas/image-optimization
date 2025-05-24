import { ToggleDarkMode } from '@/components/ui/toggle-dark-mode';

export const Header = () => {
	return (
		<header className='flex w-full items-center justify-between'>
			<section className='space-y-1'>
				<h1 className='text-2xl font-bold'>Image Optimizer</h1>
				<p className='text-sm'>
					Batch optimize multiple images at once. Reduce file sizes without
					losing quality.
				</p>
				<small className='text-xs'>
					We do not store your images, you can optimize up to 20 images at once.
				</small>
			</section>
			<ToggleDarkMode />
		</header>
	);
};
