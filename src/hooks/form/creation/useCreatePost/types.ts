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
}
