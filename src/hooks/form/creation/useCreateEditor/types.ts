import {
  type Control,
  type FieldErrors,
  type UseFormRegister
} from 'react-hook-form';

import { type IFormCreateEditor } from '@/schemas/creation/Editor/types';

import { type IOnSubmit } from '../../types';

export interface IStateCreateEditor {
  control: Control<IFormCreateEditor>;
  formControl: IOnSubmit;
  register: UseFormRegister<IFormCreateEditor>;
  errors: FieldErrors<IFormCreateEditor>;
}
