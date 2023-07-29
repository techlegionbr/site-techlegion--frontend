import { type IEditorPrivate } from '@/types/IEditor';

export interface ICreateEditor {
  data: IResponseCreateEditor;
  error: boolean;
}

export interface IResponseCreateEditor {
  message: string;
  user:
    | (IEditorPrivate & {
        password: string;
      })
    | null;
}
