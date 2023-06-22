import { type z } from 'zod';

import { type schemaLogin } from '.';

export type IFormLogin = z.infer<typeof schemaLogin>;
