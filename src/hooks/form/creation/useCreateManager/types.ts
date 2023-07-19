import { type SetStateAction, type Dispatch } from 'react';
import {
  type Control,
  type FieldErrors
  // type UseFormRegister
} from 'react-hook-form';

import { type IFormCreateManager } from '@/schemas/creation/Manager/types';

import { type IOnSubmit } from '../../types';

export interface IStateCreateManager {
  control: Control<IFormCreateManager>;
  formControl: IOnSubmit;
  isResetting: boolean;
  errors: FieldErrors<IFormCreateManager>;
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
