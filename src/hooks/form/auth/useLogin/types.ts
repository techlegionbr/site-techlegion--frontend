import { type Dispatch, type SetStateAction } from 'react';
import { type FieldErrors, type UseFormRegister } from 'react-hook-form';

import { type IFormLogin } from '@/schemas/auth/login/types';

import { type IOnSubmit } from '../../types';

export interface IStateRegister {
  formControl: IOnSubmit;
  register: UseFormRegister<IFormLogin>;
  errors: FieldErrors<IFormLogin>;
  blockForm: boolean;
  alertLogin: IAlertLogin;
  setAlertLogin: Dispatch<SetStateAction<IAlertLogin>>;
}

export interface IAlertLogin {
  show: boolean;
  status: 'error' | 'success' | null;
  helperText: {
    sup: string;
    main: string;
  };
  onClose: (() => Promise<void>) | (() => void);
}
