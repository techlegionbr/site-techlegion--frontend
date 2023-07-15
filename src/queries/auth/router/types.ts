export type TPermissionsAdmin =
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
  | 'editProfile';

// export type TPermissionsUser = Omit<
//   TPermissionsAdmin,
//   | 'createAdmin'
//   | 'manageAdmin'
//   | 'manageAllAdmins'
//   | 'createUser'
//   | 'manageUser'
//   | 'manageAllUsers'
// >;

export type TPermissionsUser =
  | 'seePanel'
  | 'createPost'
  | 'managePost'
  | 'manageAllPosts'
  | 'editProfile';

export type TLevelAccess = 'user' | 'admin';

export type TPermission = TPermissionsAdmin | TPermissionsUser;

export interface IResponseFetchAuthRouter {
  message: string;
  levelAccess: TLevelAccess | null;
  permissions: TPermissionsAdmin[] | TPermissionsUser[] | null;
}
