import { type IEditorPublic } from '@/types/IEditor';

export interface IGetAllEditors {
  users: IEditorPublic[] | null;
  error: boolean;
}

export interface IResponseGetAllEditors {
  message: string;
  users: IEditorPublic[];
}
