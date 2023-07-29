type TPermissionSelect<T extends TPermission> = T;

export type TPermission =
  | 'seePanel'
  | 'createAdmin'
  | 'manageAdmin'
  | 'manageAllAdmins'
  | 'createPost'
  | 'managePost'
  | 'manageAllPosts'
  | 'createUser'
  | 'manageUser'
  | 'manageAllUsers'
  | 'editProfile'
  | 'admin'
  | 'user'
  | 'killYourMates'
  | 'adminGod';

export type TPermissionManager = TPermissionSelect<
  | 'seePanel'
  | 'createAdmin'
  | 'manageAdmin'
  | 'manageAllAdmins'
  | 'createPost'
  | 'managePost'
  | 'manageAllPosts'
  | 'createUser'
  | 'manageUser'
  | 'manageAllUsers'
  | 'editProfile'
  | 'admin'
>;

export type TPermissionEditor = TPermissionSelect<
  | 'seePanel'
  | 'createPost'
  | 'managePost'
  | 'manageAllPosts'
  | 'editProfile'
  | 'user'
>;

export type TPermissionSpecial = TPermissionSelect<
  'killYourMates' | 'adminGod'
>;

export type TLevelAccess = 'user' | 'admin';
