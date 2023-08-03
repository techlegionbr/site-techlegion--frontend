import { permissionsManager } from '@/queries/auth/useAuthRouterQuery/groupsPermissions';
import { type TPermissionManager } from '@/types/IPermission';
import capitalizeString from '@/utils/capitalizeString';
import * as zod from 'zod';

export const schemaCreateManager = zod.object({
  name: zod
    .string()
    .nonempty('O nome é obrigatório!')
    .min(5, 'O nome deve conter no minímo 5 caracteres.')
    .max(100, 'O nome deve conter no maximo 100 caracteres.')
    .transform(capitalizeString),
  email: zod
    .string()
    .nonempty('O e-mail é obrigatório!')
    .email('Formato de e-mail inválido!')
    .min(17, 'O e-mail deve conter no minímo 17 caracteres.')
    .max(100, 'O e-mail deve conter no maximo 100 caracteres.'),
  whatsapp: zod
    .string()
    .nonempty('O whatsapp é obrigatório!')
    .refine(
      (value) => value.replace(/[\s-()]+/g, '').length === 11,
      'Número de whatsapp inválido!'
    ),
  permissions: zod
    .array(zod.string().nonempty())
    .min(2, 'É necessário ter selecionado no minimo 2 permissões.')
    .refine(
      (permissions) => {
        const isValid = permissions.every((permission) =>
          permissionsManager.includes(permission as TPermissionManager)
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
      message: 'O valor inserido é muito grande! O limite máximo esperado é 20.'
    }),
  weeklyManagerCreationLimit: zod
    .string()
    .nonempty('Esse campo é obrigatório!')
    .refine((value) => !isNaN(Number(value)), {
      message: 'É necessário inserir um número neste campo.'
    })
    .refine((value) => Number(value) <= 20, {
      message: 'O valor inserido é muito grande! O limite máximo esperado é 20.'
    }),
  weeklyEditorCreationLimit: zod
    .string()
    .nonempty('Esse campo é obrigatório!')
    .refine((value) => !isNaN(Number(value)), {
      message: 'É necessário inserir um número neste campo.'
    })
    .refine((value) => Number(value) <= 20, {
      message: 'O valor inserido é muito grande! O limite máximo esperado é 20.'
    })
});
