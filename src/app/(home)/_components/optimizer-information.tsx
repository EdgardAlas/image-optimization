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

const optimizerBenefits = [
	{
		title: 'Faster loading times',
		description:
			'Smaller images load faster, improving the overall performance of your website or application.',
	},
	{
		title: 'Reduced bandwidth usage',
		description:
			'Optimized images consume less data, which is beneficial for both users and server costs.',
	},
	{
		title: 'Better SEO',
		description:
			'Search engines favor faster-loading pages, which can improve your search engine rankings.',
	},
	{
		title: 'Improved user experience',
		description:
			'Faster loading times lead to a better experience for users, reducing bounce rates and increasing engagement.',
	},
	{
		title: 'Accessibility',
		description:
			'Optimized images can help users with slower internet connections or limited data plans access your content more easily.',
	},
	{
		title: 'Storage savings',
		description:
			'If you are storing images on a server or in the cloud, smaller file sizes can save you money on storage costs.',
	},
	{
		title: 'Compatibility',
		description:
			'Some older devices or browsers may struggle with large image files, so optimizing images can help ensure compatibility across a wider range of devices.',
	},
	{
		title: 'Improved performance on mobile devices',
		description:
			'Mobile users often have slower connections, so optimizing images can help ensure a smooth experience for them.',
	},
];
