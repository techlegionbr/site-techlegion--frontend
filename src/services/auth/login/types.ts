export interface IServiceLogin {
  data: IResponseFetchLogin;
  error: boolean | null;
}

export interface IResponseFetchLogin {
  message: string;
  entity: 'admin' | 'user' | null;
}
