import { type IPostPrivate } from '@/types/IPost';

export interface ICreatePost {
  data: IResponseCreatePost;
  error: boolean;
}

export interface IResponseCreatePost {
  message: string;
  post: IPostPrivate | null;
}
