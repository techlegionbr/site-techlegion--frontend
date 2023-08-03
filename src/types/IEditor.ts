import { type TPermissionEditor } from './IPermission';

export interface IEditorPublic {
  _id: string;
  name: string;
  profile: string;
  email: string;
  whatsapp: string;
}

export interface IEditorPrivate {
  _id: string;
  name: string;
  profile: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  permissions: TPermissionEditor[];
  weeklyPostCreationLimit: number;
  managerId: string;
  whatsapp: string;
}
