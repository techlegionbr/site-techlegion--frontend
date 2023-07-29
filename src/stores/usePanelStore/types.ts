import { type IEditorPublic } from '@/types/IEditor';
import { type IPostPublic } from '@/types/IPost';

export interface IUsePainelStoreStates {
  allEditors: IEditorPublic[] | null;
  allManagers: [] | null;
  allPosts: [] | null;
  editorsCreated: [] | null;
  managersCreated: [] | null;
  postsCreated: [] | null;
  comments: [] | null;
}

export interface IUsePainelStoreActions {
  setAllEditors: (editors: IEditorPublic[] | null) => void;
  setAllManagers: (managers: []) => void;
  setAllPosts: (posts: IPostPublic[] | null) => void;
  setEditorsCreated: (editors: []) => void;
  setManagersCreated: (managers: []) => void;
  setPostsCreated: (posts: []) => void;
  setComments: (comments: []) => void;
}
