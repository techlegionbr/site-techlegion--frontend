import { type IPostPublic } from '@/types/IPost';

export interface IGetAllPostsPublic {
  posts: IPostPublic[] | null;
  error: boolean;
}

export interface IResponseGetAllPostsPublic {
  message: string;
  posts: IPostPublic[];
}
