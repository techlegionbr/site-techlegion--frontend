import {
  type TPermissionEditor,
  type TPermissionManager
} from '@/types/IPermission';

export const permissionsManager: TPermissionManager[] = [
  'createAdmin',
  'createPost',
  'createUser',
  'editProfile',
  'manageAdmin',
  'manageAllAdmins',
  'manageAllPosts',
  'manageAllUsers',
  'managePost',
  'manageUser',
  'seePanel'
];

export const permissionsEditor: TPermissionEditor[] = [
  'seePanel',
  'manageAllPosts',
  'createPost',
  'managePost',
  'editProfile'
];
