import * as zod from 'zod';

export const schemaContact = zod.object({
  name: zod
    .string()
    .nonempty('O nome é obrigatório!')
    .min(5, 'O nome deve conter no minímo 5 caracteres.')
    .max(100, 'O nome deve conter no maximo 100 caracteres.')
    .toLowerCase(),
  email: zod
    .string()
    .nonempty('O e-mail é obrigatório!')
    .email('Formato de e-mail inválido!')
    .min(5, 'O e-mail deve conter no minímo 5 caracteres.')
    .max(100, 'O e-mail deve conter no maximo 100 caracteres.'),
  whatsapp: zod
    .string()
    .nonempty('O WhatsApp é obrigatório!')
    .refine(
      (value) => {
        return (
          value
            .replace(/[-()\s]/g, '')
            .split('')
            .filter(Number).length === 11
        );
      },
      { message: 'Formato de número inválido!' }
    ),
  message: zod
    .string()
    .nonempty('A mensagem é obrigatória!')
    .min(5, 'A mensagem deve conter no minimo 5 caracteres.')
    .max(100, 'A mensagem deve conter no maximo 100 caracteres.')
});
