import { type TPermissionsUser } from '@/queries/auth/router/types';

interface IOptionPermissionEditor {
  label: string;
  value: TPermissionsUser;
}

export const optionPermissionsEditor: IOptionPermissionEditor[] = [
  {
    value: 'seePanel',
    label: 'Visualizar painel'
  },
  {
    value: 'createPost',
    label: 'Criar post'
  },
  {
    value: 'editProfile',
    label: 'Editar perfil'
  },
  {
    value: 'manageAllPosts',
    label: 'Gerenciar todos os posts'
  },
  {
    value: 'managePost',
    label: 'Gerenciar posts'
  }
];
