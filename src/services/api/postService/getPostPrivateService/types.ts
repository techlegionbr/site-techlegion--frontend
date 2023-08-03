import { type IPostPrivate } from '@/types/IPost';

export interface IGetPostPrivate {
  post: IPostPrivate | null;
  error: boolean;
}

export interface IResponseGetPostPrivate {
  message: string;
  post: IPostPrivate;
}
