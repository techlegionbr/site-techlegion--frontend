import { type IEditorPrivate, type IEditorPublic } from '@/types/IEditor';
import { type IManagerPrivate, type IManagerPublic } from '@/types/IManager';
import { type IPostPrivate, type IPostPublic } from '@/types/IPost';

export interface IUsePainelStoreStates {
  allEditors: IEditorPublic[] | null;
  allManagers: IManagerPublic[] | null;
  allPosts: IPostPublic[] | null;
  editorsCreated: IEditorPrivate[] | null;
  managersCreated: IManagerPrivate[] | null;
  postsCreated: IPostPrivate[] | null;
  comments: [] | null;
}

export type TSetCb<T> = ((prevEditors: T[]) => T[] | null) | T[] | null;

export interface IUsePainelStoreActions {
  setAllEditors: (setCb: TSetCb<IEditorPublic>) => void;
  setAllManagers: (setCb: TSetCb<IManagerPublic>) => void;
  setAllPosts: (setCb: TSetCb<IPostPublic>) => void;
  setEditorsCreated: (setCb: TSetCb<IEditorPrivate>) => void;
  setManagersCreated: (setCb: TSetCb<IManagerPrivate>) => void;
  setPostsCreated: (setCb: TSetCb<IPostPrivate>) => void;
  setComments: (comments: []) => void;
}
