import { type TPermissionManager } from './IPermission';

export interface IManagerPublic {
  _id: string;
  name: string;
  email: string;
  profile: string;
  whatsapp: string;
}

export interface IManagerPrivate {
  _id: string;
  managerId: string;
  name: string;
  profile: string;
  whatsapp: string;
  email: string;
  createAt: string;
  updateAt: string;
  permissions: TPermissionManager[];
  weeklyEditorCreationLimit: number;
  weeklyManagerCreationLimit: number;
  weeklyPostCreationLimit: number;
}
