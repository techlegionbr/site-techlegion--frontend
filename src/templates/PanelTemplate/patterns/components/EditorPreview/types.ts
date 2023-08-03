import { type ComponentProps } from 'react';

import { type IEditorPublic } from '@/types/IEditor';

export interface IEditorPreview extends Omit<IEditorPublic, '_id'> {}

export interface IEditorPreviewProps extends ComponentProps<'li'> {
  editor: IEditorPreview;
}
