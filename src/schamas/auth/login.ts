import * as zod from 'zod';

// import { type IFormInputRegister } from './types';

export const schemaLogin = zod.object({
  email: zod
    .string()
    .nonempty('O e-mail é obrigatório')
    .email('Formato de e-mail inválido!')
    .toLowerCase(),
  password: zod
    .string()
    .nonempty('A senha é obrigatório!')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\S]{8,}$/,
      'A senha deve conter pelo menos 8 caracteres, uma letra maiúscula, uma letra minúscula e um número.'
    )
});
