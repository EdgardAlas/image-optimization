import { OptimizationSettingsType } from '@/app/(home)/_lib/optimization-settings.schema';
import { useFormContext } from 'react-hook-form';

export const useOptimizationSettingsForm = () => {
	return useFormContext<OptimizationSettingsType>();
};
