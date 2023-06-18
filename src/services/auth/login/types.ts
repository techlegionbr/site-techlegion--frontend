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

export interface IServiceLogin {
  data: IResponseFetchLogin;
  error: boolean | null;
}

export interface IResponseFetchLogin {
  message: string;
  entity: 'admin' | 'user' | null;
}
