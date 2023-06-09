import { permissionsAdmin } from '@/queries/auth/router/groupsPermissions';
import { type TPermissionsAdmin } from '@/queries/auth/router/types';
import * as zod from 'zod';

export const schemaCreateManager = zod.object({
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
          permissionsAdmin.includes(permission as TPermissionsAdmin)
        );
        if (!isValid) {
          return false;
        }
        if (Array.from(new Set(permissions)).length !== permissions.length) {
          return false;
        }
        return true;
      },
      { message: 'Permissões inválidas!' }
    ),
  weeklyPostCreationLimit: zod
    .string()
    .nonempty('Esse campo é obrigatório!')
    .refine((value) => !isNaN(Number(value)), {
      message: 'É necessário inserir um número neste campo.'
    })
    .refine((value) => value.length <= 9, {
      message:
        'O valor inserido é muito grande! O limite máximo esperado é de 9 dígitos.'
    }),
  weeklyManagerCreationLimit: zod
    .string()
    .nonempty('Esse campo é obrigatório!')
    .refine((value) => !isNaN(Number(value)), {
      message: 'É necessário inserir um número neste campo.'
    })
    .refine((value) => value.length <= 9, {
      message:
        'O valor inserido é muito grande! O limite máximo esperado é de 9 dígitos.'
    }),
  weeklyEditorCreationLimit: zod
    .string()
    .nonempty('Esse campo é obrigatório!')
    .refine((value) => !isNaN(Number(value)), {
      message: 'É necessário inserir um número neste campo.'
    })
    .refine((value) => value.length <= 9, {
      message:
        'O valor inserido é muito grande! O limite máximo esperado é de 9 dígitos.'
    })
});
