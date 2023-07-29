import { type IManagerPrivate } from '@/types/IManager';

export interface ICreateManager {
  data: IResponseCreateManager;
  error: boolean;
}

export interface IResponseCreateManager {
  message: string;
  admin:
    | (IManagerPrivate & {
        password: string;
      })
    | null;
}
