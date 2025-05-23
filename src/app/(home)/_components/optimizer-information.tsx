import { optimizerBenefits } from '@/data/optimizer-benefits';
import React from 'react';

export const OptimizerInformation = () => {
	return (
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
					{optimizerBenefits.map((benefit) => (
						<li key={benefit.title}>
							<strong>{benefit.title}:</strong> {benefit.description}
						</li>
					))}
				</ul>
			</section>
		</article>
	);
};
