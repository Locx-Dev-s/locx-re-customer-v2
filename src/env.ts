import { z } from 'zod';

const envSchema = z.object({
	MODE: z.union([z.literal('test'), z.literal('development'), z.literal('production')]).default('development'),
	VITE_API_BASE_URL: z.string(),
	VITE_MAP_KEY: z.string()
});

export const env = envSchema.parse(import.meta.env);
