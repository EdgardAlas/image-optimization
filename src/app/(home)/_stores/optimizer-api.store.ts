import { OptimizerApiResponse } from '@/app/(home)/_types/optimizer-api.types';
import { create } from 'zustand';

interface OptimizerApiStore {
	response: OptimizerApiResponse | null;
	setResponse: (response: OptimizerApiResponse | null) => void;
}

export const useOptimizerApiStore = create<OptimizerApiStore>()((set) => ({
	response: null,
	setResponse: (response: OptimizerApiResponse | null) => {
		set(() => ({
			response,
		}));
	},
}));
