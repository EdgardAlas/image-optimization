import axios from 'axios';

export const optimizerApi = axios.create({
	baseURL: process.env.NEXT_PUBLIC_OPTIMIZER_API_URL,
});
