import { type z } from 'zod';

import { type schemaContact } from './index';

export type IFormContact = z.infer<typeof schemaContact>;
