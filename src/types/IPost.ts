export interface IActionPostRegister {
  sessionId: string;
  date: Date;
}

export type ICommentPostRegister = IActionPostRegister & {
  comment: string;
};

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
  createdAt: Date;
  dislikes: IActionPostRegister[];
  updatedAt: Date;
}

export interface IPostPublic extends Omit<IPost, 'updateAt'> {}
export interface IPostPrivate extends IPost {}
