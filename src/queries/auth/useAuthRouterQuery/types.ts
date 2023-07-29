import { type TLevelAccess, type TPermission } from '@/types/IPermission';

export interface IResponseFetchAuthRouter {
  message: string;
  levelAccess: TLevelAccess | null;
  permissions: TPermission[] | null;
}
