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

export type TPermissionsUser = Omit<
  TPermissionsAdmin,
  | 'createAdmin'
  | 'manageAdmin'
  | 'manageAllAdmins'
  | 'createUser'
  | 'manageUser'
  | 'manageAllUsers'
>;

export interface IResponseFetchVerificationTokenAuth {
  message: string;
  entity: 'admin' | 'user' | null;
  permissions: TPermissionsAdmin[] | TPermissionsUser[] | null;
}
