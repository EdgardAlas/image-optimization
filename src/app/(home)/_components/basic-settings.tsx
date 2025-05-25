import { useOptimizationSettingsContext } from '@/app/(home)/_hooks/use-optimization-settings-context';
import { Checkbox } from '@/components/ui/checkbox';
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { imageFormats } from '@/data/image-formats';

export const BasicSettings = () => {
	const form = useOptimizationSettingsContext();

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

			<FormField
				control={form.control}
				name='removeMetadata'
				render={({ field }) => (
					<FormItem className='flex items-center space-x-2'>
						<FormControl>
							<Checkbox
								checked={field.value}
								onCheckedChange={field.onChange}
							/>
						</FormControl>
						<FormLabel>Remove Metadata</FormLabel>
					</FormItem>
				)}
			/>

			<FormField
				control={form.control}
				name='preserveFileName'
				render={({ field }) => (
					<FormItem className='flex items-center space-x-2'>
						<FormControl>
							<Checkbox
								checked={field.value}
								onCheckedChange={field.onChange}
							/>
						</FormControl>
						<FormLabel>Preserve File Name</FormLabel>
					</FormItem>
				)}
			/>
		</div>
	);
};
