import { type TPermissionsAdmin } from '@/queries/auth/useAuthRouterQuery/types';

interface IOptionPermissionManager {
  label: string;
  value: TPermissionsAdmin;
}

export const optionPermissionsManager: IOptionPermissionManager[] = [
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
  },
  {
    value: 'createAdmin',
    label: 'Criar gestor'
  },
  {
    value: 'createUser',
    label: 'Criar redator'
  },
  {
    value: 'manageAdmin',
    label: 'Gerenciar gestores'
  },
  {
    value: 'manageAllAdmins',
    label: 'Gerenciar todos os gestores'
  },
  {
    value: 'manageAllUsers',
    label: 'Gerenciar todos os redatores'
  }
];
