import { type IPostPublic } from '@/types/IPost';

export type TSetCb<T> = ((prevEditors: T[]) => T[] | null) | T[] | null;
export interface IUseHomeStoreStates {
  allPosts: IPostPublic[] | null;
}
export interface IUseHomeStoreActions {
  setAllPosts: (setCb: TSetCb<IPostPublic>) => void;
}
