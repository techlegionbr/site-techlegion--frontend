import { type Dispatch, type SetStateAction } from 'react';
import {
  type FieldErrors,
  type Control,
  type UseFormWatch
} from 'react-hook-form';

import { type IFormCreatePost } from '@/schemas/creation/Post/types';

import { type IOnSubmit } from '../../types';

export interface IStateCreatePost {
  control: Control<IFormCreatePost>;
  formControl: IOnSubmit;
  isResetting: boolean;
  errors: FieldErrors<IFormCreatePost>;
  watch: UseFormWatch<IFormCreatePost>;
  alertNewEntitie: IAlertNewEntitie;
  setAlertNewEntitie: Dispatch<SetStateAction<IAlertNewEntitie>>;
  alertDefault: IAlertDefault;
}

export interface IAlertNewEntitie {
  show: boolean;
  entitie: {
    title: string;
    nameRoute: string;
  } | null;
}

export interface IAlertDefault {
  show: boolean;
  onClose?: () => void;
  helperText: {
    main: string;
    sup: string;
  };
  status: 'error' | 'success' | null;
}
