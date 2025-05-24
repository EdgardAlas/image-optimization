'use client';

import { Card } from '@/components/ui/card';
import { imageFormats } from '@/data/image-formats';
import { cn } from '@/lib/utils';
import { Upload } from 'lucide-react';
import { useCallback } from 'react';
import { FileRejection, useDropzone } from 'react-dropzone';

interface DropzoneProps {
	onFilesChange?: (files: File[]) => void;
	onFilesReject?: (files: FileRejection[]) => void;
	maxFiles?: number;
	maxSize?: number;
	accept?: Record<string, string[]>;
	className?: string;
	disabled?: boolean;
	title?: string;
	subtitle?: string;
	smallText?: string;
}

export function Dropzone({
	onFilesChange,
	maxFiles = 5,
	maxSize = 5 * 1024 * 1024, // 5MB
	accept = {
		'image/*': imageFormats.map((format) => format.extension),
	},
	className,
	onFilesReject,
	disabled = false,
	title,
	subtitle,
	smallText,
}: DropzoneProps) {
	const onDrop = useCallback(
		(acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
			if (acceptedFiles.length > 0) {
				onFilesChange?.(acceptedFiles);
			}

			// Log rejected files for debugging
			if (rejectedFiles.length > 0) {
				console.error('Rejected files:', rejectedFiles);
				onFilesReject?.(rejectedFiles);
			}
		},
		[onFilesChange]
	);

	const { getRootProps, getInputProps, isDragActive, isDragReject } =
		useDropzone({
			onDrop,
			accept,
			maxSize,
			maxFiles,
			disabled,
		});

	const formatFileSize = (bytes: number) => {
		if (bytes === 0) return '0 Bytes';
		const k = 1024;
		const sizes = ['Bytes', 'KB', 'MB', 'GB'];
		const i = Math.floor(Math.log(bytes) / Math.log(k));
		return (
			Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
		);
	};

	return (
		<Card
			{...getRootProps()}
			className={cn(
				'border-muted-foreground/25 hover:border-muted-foreground/50 h-full cursor-pointer border-2 border-dashed transition-colors',
				isDragActive && 'border-primary bg-primary/5',
				isDragReject && 'border-destructive bg-destructive/5',
				disabled && 'cursor-not-allowed opacity-50',
				className
			)}
		>
			<input {...getInputProps()} />
			<div className='flex h-full flex-col items-center justify-center px-6 text-center'>
				<Upload
					className={cn(
						'text-muted-foreground mb-4 h-12 w-12',
						isDragActive && 'text-primary',
						isDragReject && 'text-destructive'
					)}
				/>
				<div className='space-y-2'>
					<p className='text-lg font-medium'>
						{isDragActive
							? isDragReject
								? 'Some files will be rejected'
								: 'Drop files here'
							: disabled
								? 'Upload disabled'
								: title || 'Drag & drop files here, or click to select'}
					</p>
					<p className='text-muted-foreground text-sm'>
						{subtitle ||
							`Supports images, PDFs, and text files up to ${formatFileSize(maxSize)}`}
					</p>
					{smallText && (
						<p className='text-muted-foreground text-xs'>
							{smallText || `Maximum ${maxFiles} files at once`}
						</p>
					)}
				</div>
			</div>
		</Card>
	);
}
