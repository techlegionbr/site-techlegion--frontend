import { type ComponentProps } from 'react';

import { type IProfileEditor } from '@/types/IPost';

export interface IPostPreview {
  title: string;
  description: string;
  likes: number;
  deslikes: number;
  comments: number;
  shares: number;
  profileEditor: IProfileEditor;
  nameRoute: string;
}
export interface IPostPreviewProps extends ComponentProps<'li'> {
  post: IPostPreview;
}
