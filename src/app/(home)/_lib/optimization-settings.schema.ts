import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

export const optimizationSettingsSchema = z
	.object({
		quality: z
			.number({ required_error: 'Quality is required' })
			.min(1, { message: 'Quality must be at least 1' })
			.max(100, { message: 'Quality cannot exceed 100' }),
		outputFormat: z.enum(['jpg', 'png', 'webp', 'avif'], {
			required_error: 'Output format is required',
			invalid_type_error: 'Invalid output format',
		}),
		preserveFileName: z.boolean({
			required_error: 'Preserve file name is required',
			invalid_type_error: 'Preserve file name must be a boolean',
		}),
		maxWidth: z
			.number({ required_error: 'Max width is required' })
			.min(1, { message: 'Max width must be at least 1' })
			.optional(),
		maxHeight: z
			.number({ required_error: 'Max height is required' })
			.min(1, { message: 'Max height must be at least 1' })
			.optional(),
		resizeMode: z
			.enum(['contain', 'cover', 'fill', 'inside', 'outside'], {
				required_error: 'Resize mode is required',
				invalid_type_error: 'Invalid resize mode',
			})
			.optional(),
		modifyDimensions: z.boolean({
			required_error: 'Modify dimensions is required',
			invalid_type_error: 'Modify dimensions must be a boolean',
		}),
		removeMetadata: z.boolean({
			required_error: 'Remove metadata is required',
			invalid_type_error: 'Remove metadata must be a boolean',
		}),
	})
	.refine(
		(data) =>
			!data.modifyDimensions ||
			[data.maxWidth, data.maxHeight, data.resizeMode].every(
				(v) => v !== undefined && v !== null
			),
		{
			message:
				'maxWidth, maxHeight, and resizeMode are required when modifyDimensions is true',
			path: ['modifyDimensions'],
		}
	);

export type OptimizationSettingsType = z.infer<
	typeof optimizationSettingsSchema
>;

export const optimizationSettingsSchemaResolver = zodResolver(
	optimizationSettingsSchema
);
