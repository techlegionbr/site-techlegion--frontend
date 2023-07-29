import { type IPostPrivate } from '@/types/IPost';

export interface IGetAllPostsPrivate {
  posts: IPostPrivate[] | null;
  error: boolean;
}

export interface IResponseGetAllPostsPrivate {
  message: string;
  posts: IPostPrivate[];
}
