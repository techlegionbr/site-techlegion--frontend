export interface ICreateEditor {
  data: IResponseCreateEditor;
  error: boolean;
}

export interface IResponseCreateEditor {
  message: string;
  user: {
    email: string;
    password: string;
    profile: string;
    name: string;
  } | null;
}
