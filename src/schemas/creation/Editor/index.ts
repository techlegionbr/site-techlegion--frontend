import { permissionsUser } from '@/queries/auth/router/groupsPermissions';
import { type TPermissionsUser } from '@/queries/auth/router/types';
import * as zod from 'zod';

export const schemaCreateEditor = zod.object({
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
  permissions: zod
    .array(zod.string().nonempty())
    .min(2, 'É necessário ter selecionado no minimo 2 permissões.')
    .refine(
      (permissions) => {
        const isValid = permissions.every((permission) =>
          permissionsUser.includes(permission as TPermissionsUser)
        );
        return (
          isValid &&
          Array.from(new Set(permissions)).length === permissions.length
        );
      },
      { message: 'Permissões inválidas!' }
    ),
  weeklyPostCreationLimit: zod
    .string()
    .nonempty('Esse campo é obrigatório!')
    .refine((value) => !isNaN(Number(value)), {
      message: 'É necessário inserir um número neste campo.'
    })
    .refine((value) => Number(value) <= 20, {
      message:
        'O valor inserido é muito grande! O limite máximo esperado é de 20.'
    })
});
