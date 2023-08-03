import { type IPostPublic } from '@/types/IPost';

export interface IGetPostPublic {
  post: IPostPublic | null;
  error: boolean;
}

export interface IResponseGetPostPublic {
  message: string;
  post: IPostPublic;
}
