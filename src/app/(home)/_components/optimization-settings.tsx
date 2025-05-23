import { AdvancedSettings } from '@/app/(home)/_components/advanced-settings';
import { BasicSettings } from '@/app/(home)/_components/basic-settings';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const OptimizationSettings = () => {
	return (
		<Card className='h-full w-full gap-1'>
			<CardHeader>
				<h2 className='font-bold'>Optimization Settings</h2>
			</CardHeader>
			<CardContent>
				<Tabs defaultValue='basic'>
					<TabsList className='grid w-full grid-cols-2'>
						<TabsTrigger value='basic'>Basic</TabsTrigger>
						<TabsTrigger value='advanced'>Advanced</TabsTrigger>
					</TabsList>
					<TabsContent value='basic'>
						<BasicSettings />
					</TabsContent>
					<TabsContent value='advanced'>
						<AdvancedSettings />
					</TabsContent>
				</Tabs>
			</CardContent>
		</Card>
	);
};
