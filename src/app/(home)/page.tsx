import { OptimizationSettings } from '@/app/(home)/_components/optimization-settings';
import { Card, CardContent } from '@/components/ui/card';
import { Header } from './_components/header';
import { OptimizerInformation } from '@/app/(home)/_components/optimizer-information';

export default function Home() {
	return (
		<main className='container mx-auto flex min-h-screen flex-col items-center gap-8 p-8 md:p-4'>
			<Header />

			<section className='grid w-full flex-1 gap-4 lg:min-h-[725px] lg:grid-cols-12 lg:gap-8'>
				<section className='col-span-12 grid gap-4 lg:col-span-4 lg:gap-8'>
					<section>
						<Card className='h-full w-full'>
							<CardContent>Image Uploader</CardContent>
						</Card>
					</section>
					<section>
						<OptimizationSettings />
					</section>
				</section>
				<section className='col-span-12 max-h-[725px] overflow-y-auto lg:col-span-8'>
					<Card className='h-full w-full'>
						<CardContent>Summary of optimized images</CardContent>
					</Card>
				</section>
			</section>

			<OptimizerInformation />
		</main>
	);
}

/* const imageFormats = [
	{
		label: 'JPG',
		value: 'jpeg',
	},
	{
		label: 'PNG',
		value: 'png',
	},
	{
		label: 'AVIF',
		value: 'avif',
	},
	{
		label: 'SVG',
		value: 'svg',
	},
	{
		label: 'WebP',
		value: 'webp',
	},
];
 */
