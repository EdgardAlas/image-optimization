import { optimizerApi } from '@/app/(home)/_api/api-base';
import { OptimizerApiResponse } from '@/app/(home)/_types/optimizer-api.types';

export const optimizeImages = (form: FormData) => {
	return optimizerApi.post<OptimizerApiResponse>('optimizer', form);
};
