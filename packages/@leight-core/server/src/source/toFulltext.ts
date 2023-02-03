export const toFulltext = <TFilter>(search: string | undefined, fields: (keyof TFilter)[]): Partial<TFilter> | undefined => search ? {
	OR: fields.map(field => ({
		[field]: {
			contains: search,
			mode: "insensitive",
		}
	}))
} as any : undefined;
