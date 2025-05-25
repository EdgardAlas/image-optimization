import { cn } from '@/lib/utils';

type MetricProps = {
	title: string;
	value: string | number;
	titleClassName?: string;
	valueClassName?: string;
};

export const Metric = ({
	title,
	value,
	titleClassName = '',
	valueClassName = '',
}: MetricProps) => (
	<section className='flex flex-col items-center gap-2'>
		<h4 className={cn('text-center', titleClassName)}>{title}:</h4>
		<span className={cn('text-xl font-bold', valueClassName)}>{value}</span>
	</section>
);
