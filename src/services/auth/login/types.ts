export interface IServiceLogin {
  data: IResponseFetchLogin;
  error: boolean | null;
}

export interface IResponseFetchLogin {
  message: string;
  levelAccess: 'admin' | 'user' | null;
}
