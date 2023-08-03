import { type Flatten } from '@/types/utilitsTypes';

import { type THeadingType } from '../../components/Toolbar/options/types';

export interface ITextEditorContext {
  statusControllers: IStatusControllers;
  handleStatesControllers: (
    controller: keyof IStatusControllers,
    value: Flatten<IStatusControllers>
  ) => void;
}

export interface IStatusControllers {
  heading: THeadingType;
  bold: boolean;
  italic: boolean;
  list_ul: boolean;
  list_ol: boolean;
  list_td: boolean;
  align_start: boolean;
  align_center: boolean;
  align_end: boolean;
  align_justify: boolean;
  blockQuote: boolean;
}
