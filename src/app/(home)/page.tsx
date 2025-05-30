import { ImageOptimizationForm } from '@/app/(home)/_components/image-optimization-form';
import { OptimizerInformation } from '@/app/(home)/_components/optimizer-information';
import { Metadata } from 'next';
import { Header } from './_components/header';

export const metadata: Metadata = {
	title: 'Image Optimization Tool',
	alternates: {
		canonical: process.env.BASE_URL,
	},
	description:
		'Optimize your images for the web with our easy-to-use image optimization tool. Reduce file size without sacrificing quality.',
	openGraph: {
		type: 'website',
		url: process.env.BASE_URL,
	},
};

export default function Home() {
	return (
		<main className='container mx-auto flex min-h-screen flex-col items-center gap-8 p-8 md:p-4'>
			<Header />

			<ImageOptimizationForm />

			<OptimizerInformation />
		</main>
	);
}
