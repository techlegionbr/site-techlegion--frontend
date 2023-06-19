import { type FieldErrors, type UseFormRegister } from 'react-hook-form';

import { type IFormContact } from '@/schemas/contact/types';

import { type IOnSubmit } from '../../types';

export interface IStateContact {
  contactFormControl: IOnSubmit;
  contactInputControl: UseFormRegister<IFormContact>;
  contactFormErrors: FieldErrors<IFormContact>;
}
