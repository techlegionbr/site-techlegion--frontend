import { type Dispatch, type SetStateAction } from 'react';
import { type Control, type FieldErrors } from 'react-hook-form';

import { type IFormCreateEditor } from '@/schemas/creation/Editor/types';

import { type IOnSubmit } from '../../types';

export interface IStateCreateEditor {
  control: Control<IFormCreateEditor>;
  formControl: IOnSubmit;
  isResetting: boolean;
  errors: FieldErrors<IFormCreateEditor>;
  alertNewEntitie: IAlertNewEntitie;
  setAlertNewEntitie: Dispatch<SetStateAction<IAlertNewEntitie>>;
  alertDefault: IAlertDefault;
}

export interface IAlertNewEntitie {
  show: boolean;
  entitie: {
    name: string;
    email: string;
    password: string;
    profile: string;
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
