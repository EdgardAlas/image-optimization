// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function jsonToFormData(data: Record<string, any>): FormData {
	const formData = new FormData();

	Object.entries(data).forEach(([key, value]) => {
		if (Array.isArray(value)) {
			if (value.length > 0 && value[0] instanceof File) {
				value.forEach((file) => {
					formData.append(key, file);
				});
			} else {
				formData.append(key, JSON.stringify(value));
			}
		} else if (value instanceof File) {
			formData.append(key, value);
		} else if (typeof value === 'object' && value !== null) {
			formData.append(key, JSON.stringify(value));
		} else if (typeof value === 'boolean' || typeof value === 'number') {
			formData.append(key, value.toString());
		} else if (value !== undefined && value !== null) {
			formData.append(key, value);
		}
	});

	return formData;
}
