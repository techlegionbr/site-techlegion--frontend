export interface IActionPostRegister {
  sessionId: string;
  date: Date;
}

export type ICommentPostRegister = IActionPostRegister & {
  comment: string;
};

export interface IProfileEditor {
  image: string;
  name: string;
}

export interface IPost {
  _id: string;
  comments: ICommentPostRegister[];
  content: {
    html: string;
  };
  editorId: string;
  head: {
    title: string;
    description: string;
  };
  likes: IActionPostRegister[];
  route: {
    name: string;
  };
  shares: IActionPostRegister[];
  createdAt: string;
  dislikes: IActionPostRegister[];
  updatedAt: string;
  profileEditor: IProfileEditor;
}

export interface IPostPublic extends Omit<IPost, 'updatedAt'> {}
export interface IPostPrivate extends IPost {}
