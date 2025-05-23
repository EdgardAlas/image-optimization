import { AdvancedSettings } from '@/app/(home)/_components/advanced-settings';
import { BasicSettings } from '@/app/(home)/_components/basic-settings';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from '@/components/ui/card';
import { LoadingButton } from '@/components/ui/loading-button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const OptimizationSettings = () => {
	return (
		<Card className='w-full gap-1 lg:h-[460px]'>
			<CardHeader>
				<h2 className='font-bold'>Optimization Settings</h2>
			</CardHeader>
			<CardContent className='h-full'>
				<Tabs defaultValue='basic' className='flex'>
					<TabsList className='mb-3 grid w-full grid-cols-2'>
						<TabsTrigger value='basic'>Basic</TabsTrigger>
						<TabsTrigger value='advanced'>Advanced</TabsTrigger>
					</TabsList>
					<TabsContent value='basic' className='h-full'>
						<BasicSettings />
					</TabsContent>
					<TabsContent value='advanced'>
						<AdvancedSettings />
					</TabsContent>
				</Tabs>
			</CardContent>
			<CardFooter className='mt-4'>
				<LoadingButton className='w-full'>Optimize Images</LoadingButton>
			</CardFooter>
		</Card>
	);
};
