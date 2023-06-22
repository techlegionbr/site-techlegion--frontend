import { type FieldErrors, type UseFormRegister } from 'react-hook-form';

import { type IFormContact } from '@/schemas/contact/types';

import { type IOnSubmit } from '../types';

export interface IStateContact {
  formControl: IOnSubmit;
  register: UseFormRegister<IFormContact>;
  errors: FieldErrors<IFormContact>;
}
