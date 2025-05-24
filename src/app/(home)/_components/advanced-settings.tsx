import { useOptimizationSettingsForm } from '@/app/(home)/_hooks/use-optimization-settings-form';
import { Checkbox } from '@/components/ui/checkbox';
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';

export const AdvancedSettings = () => {
	const form = useOptimizationSettingsForm();

	const modifyDimensions = form.watch('modifyDimensions');

	return (
		<div className='flex flex-col gap-6'>
			<FormField
				control={form.control}
				name='modifyDimensions'
				render={({ field }) => (
					<FormItem className='flex items-center space-x-2'>
						<FormControl>
							<Checkbox
								checked={field.value}
								onCheckedChange={field.onChange}
							/>
						</FormControl>
						<FormLabel>Modify Dimensions</FormLabel>
					</FormItem>
				)}
			/>

			<div className='grid gap-4 lg:grid-cols-2'>
				<FormField
					control={form.control}
					name='maxWidth'
					render={({ field }) => (
						<FormItem className='w-full'>
							<FormLabel>Width</FormLabel>
							<FormControl>
								<Input
									disabled={!modifyDimensions}
									type='number'
									placeholder='Width'
									min={0}
									max={10000}
									{...field}
								/>
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='maxHeight'
					render={({ field }) => (
						<FormItem className='w-full'>
							<FormLabel>Height</FormLabel>
							<FormControl>
								<Input
									disabled={!modifyDimensions}
									type='number'
									placeholder='Height'
									min={0}
									max={10000}
									{...field}
								/>
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>
			</div>

			<FormField
				control={form.control}
				name='resizeMode'
				render={({ field }) => (
					<FormItem>
						<FormLabel>Resize Mode</FormLabel>
						<FormControl>
							<Select
								onValueChange={field.onChange}
								defaultValue={field.value}
								disabled={!modifyDimensions}
							>
								<SelectTrigger className='w-full'>
									<SelectValue placeholder='Select resize mode' />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value='contain'>Contain</SelectItem>
									<SelectItem value='cover'>Cover</SelectItem>
									<SelectItem value='fill'>Fill</SelectItem>
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
