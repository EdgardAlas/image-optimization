import { OptimizationSettingsType } from '@/app/(home)/_lib/optimization-settings.schema';
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import {
	Select,
	SelectItem,
	SelectTrigger,
	SelectValue,
	SelectContent,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { imageFormats } from '@/data/image-formats';
import { useFormContext } from 'react-hook-form';

export const BasicSettings = () => {
	const form = useFormContext<OptimizationSettingsType>();
	return (
		<div className='flex flex-col gap-6'>
			<FormField
				control={form.control}
				name='quality'
				render={({ field }) => (
					<FormItem>
						<FormLabel>Quality: {field.value}%</FormLabel>
						<FormControl>
							<Slider
								value={[field.value]}
								onValueChange={(value) => {
									field.onChange(value[0]);
								}}
								defaultValue={[80]}
								min={0}
								max={100}
								step={1}
							/>
						</FormControl>

						<FormMessage />
					</FormItem>
				)}
			/>

			<FormField
				control={form.control}
				name='outputFormat'
				render={({ field }) => (
					<FormItem>
						<FormLabel>Output Format</FormLabel>
						<FormControl>
							<Select onValueChange={field.onChange} defaultValue={field.value}>
								<SelectTrigger className='w-full'>
									<SelectValue placeholder='Select output format' />
								</SelectTrigger>
								<SelectContent>
									{imageFormats.map((format) => (
										<SelectItem key={format.value} value={format.value}>
											{format.label}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</FormControl>

						<FormMessage />
					</FormItem>
				)}
			/>
		</div>
	);
};
