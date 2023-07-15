export interface ICreateManager {
  data: IResponseCreateManager;
  error: boolean;
}

export interface IResponseCreateManager {
  message: string;
  admin: {
    email: string;
    password: string;
    profile: string;
    name: string;
  } | null;
}
