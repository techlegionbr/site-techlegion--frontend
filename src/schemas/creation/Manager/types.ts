import { type z } from 'zod';

import { type schemaCreateManager } from './';

export type IFormCreateManager = z.infer<typeof schemaCreateManager>;
