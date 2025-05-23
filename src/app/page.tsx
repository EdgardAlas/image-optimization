import { Card, CardContent } from '@/components/ui/card';
import { ToggleDarkMode } from '@/components/ui/toggle-dark-mode';

export default function Home() {
	return (
		<main className='container mx-auto flex min-h-screen flex-col items-center gap-8 p-8 md:p-4'>
			<header className='flex w-full items-center justify-between'>
				<section className='space-y-1'>
					<h1 className='text-2xl font-bold'>Image Optimizer</h1>
					<p className='text-sm'>
						Batch optimize multiple images at once. Reduce file sizes without
						losing quality.
					</p>
				</section>
				<ToggleDarkMode />
			</header>

			<section className='grid w-full flex-1 gap-4 lg:min-h-[725px] lg:grid-cols-12 lg:gap-8'>
				<section className='col-span-12 grid gap-4 lg:col-span-4 lg:gap-8'>
					<section>
						<Card className='h-full w-full'>
							<CardContent>Image Uploader</CardContent>
						</Card>
					</section>
					<section>
						<Card className='h-full w-full'>
							<CardContent>Optimizer options</CardContent>
						</Card>
					</section>
				</section>
				<section className='col-span-12 max-h-[725px] overflow-y-auto lg:col-span-8'>
					<Card className='h-full w-full'>
						<CardContent>Summary of optimized images</CardContent>
					</Card>
				</section>
			</section>

			<article className='w-full max-w-2xl space-y-4 rounded-lg'>
				<header>
					<h2 className='text-xl font-bold'>Why use an image optimizer?</h2>
				</header>
				<section className='space-y-4'>
					<p className='text-sm'>
						An image optimizer is a tool that reduces the file size of images
						without significantly affecting their quality. This is important for
						several reasons:
					</p>
					<ul className='list-disc space-y-2 pl-6 text-sm'>
						<li>
							<strong>Faster loading times:</strong> Smaller images load faster,
							improving the overall performance of your website or application.
						</li>
						<li>
							<strong>Reduced bandwidth usage:</strong> Optimized images consume
							less data, which is beneficial for both users and server costs.
						</li>
						<li>
							<strong>Better SEO:</strong> Search engines favor faster-loading
							pages, which can improve your search engine rankings.
						</li>
						<li>
							<strong>Improved user experience:</strong> Faster loading times
							lead to a better experience for users, reducing bounce rates and
							increasing engagement.
						</li>
						<li>
							<strong>Accessibility:</strong> Optimized images can help users
							with slower internet connections or limited data plans access your
							content more easily.
						</li>
						<li>
							<strong>Storage savings:</strong> If you are storing images on a
							server or in the cloud, smaller file sizes can save you money on
							storage costs.
						</li>
						<li>
							<strong>Compatibility:</strong> Some older devices or browsers may
							struggle with large image files, so optimizing images can help
							ensure compatibility across a wider range of devices.
						</li>
						<li>
							<strong>Improved performance on mobile devices:</strong> Mobile
							users often have slower connections, so optimizing images can help
							ensure a smooth experience for them.
						</li>
					</ul>
				</section>
			</article>
		</main>
	);
}
