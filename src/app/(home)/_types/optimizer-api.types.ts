export interface OptimizerApiResponse {
	originalSize: number;
	optimizedSize: number;
	reduction: number;
	totalImages: number;
	images: OptimizedImage[];
	usedOptions: UsedOptions;
}

export interface OptimizedImage {
	fileName: string;
	originalSize: number;
	optimizedSize: number;
	reduction: number;
	imageBase64: string;
	originalImage: string;
}

export interface UsedOptions {
	quality: number;
	outputFormat: string;
	preserveFileName: boolean;
	maxWidth: number;
	maxHeight: number;
	resizeMode: string;
	modifyDimensions: boolean;
	removeMetadata: boolean;
}
