import type * as z from 'zod';

import { type schemaCreatePost } from '.';

export type IFormCreatePost = z.infer<typeof schemaCreatePost>;
