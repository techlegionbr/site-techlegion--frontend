import { type z } from 'zod';

import { type schemaCreateEditor } from './';

export type IFormCreateEditor = z.infer<typeof schemaCreateEditor>;
