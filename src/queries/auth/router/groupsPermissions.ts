import { type TPermissionsUser, type TPermissionsAdmin } from './types';

export const permissionsAdmin: TPermissionsAdmin[] = [
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

export const permissionsUser: TPermissionsUser[] = [
  'seePanel',
  'manageAllPosts',
  'createPost',
  'managePost',
  'editProfile'
];
