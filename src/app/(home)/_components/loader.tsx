import { Card, CardContent } from '@/components/ui/card';

export const Loader = () => (
	<Card className='col-span-12 max-h-[730px] overflow-y-auto lg:col-span-8'>
		<CardContent className='h-full'>
			<div className='flex h-full items-center justify-center'>
				<svg
					className='animate-spin'
					width='48'
					height='48'
					viewBox='0 0 48 48'
					fill='none'
					aria-label='Loading'
					xmlns='http://www.w3.org/2000/svg'
				>
					<circle
						className='stroke-foreground opacity-25'
						cx='24'
						cy='24'
						r='20'
						strokeWidth='6'
						fill='none'
					/>
					<path
						className='stroke-foreground opacity-75'
						d='M44 24c0-11.046-8.954-20-20-20'
						strokeWidth='6'
						strokeLinecap='round'
					/>
				</svg>
			</div>
		</CardContent>
	</Card>
);
