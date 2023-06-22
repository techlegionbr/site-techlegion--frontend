import {
  type Control,
  type FieldErrors,
  type UseFormRegister
} from 'react-hook-form';

import { type IFormCreateManager } from '@/schemas/creation/Manager/types';

import { type IOnSubmit } from '../../types';

export interface IStateCreateManager {
  control: Control<IFormCreateManager>;
  formControl: IOnSubmit;
  register: UseFormRegister<IFormCreateManager>;
  errors: FieldErrors<IFormCreateManager>;
}
