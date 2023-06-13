import { type BaseSyntheticEvent } from 'react';
import {
  useForm,
  type UseFormRegister,
  type SubmitHandler,
  type FieldErrors
} from 'react-hook-form';

import { schemaRegister } from '@/schamas/auth/register';
import { type IFormInputRegister } from '@/schamas/auth/types';
import { zodResolver } from '@hookform/resolvers/zod';

interface IStateRegister {
  registerFormControl: IOnSubmit;
  registerInputControl: UseFormRegister<IFormInputRegister>;
  registerFormErrors: FieldErrors<IFormInputRegister>;
}

interface IOnSubmit {
  onSubmit: (
    e: BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
}

const useRegister = (): IStateRegister => {
  const {
    register: registerInputControl,
    handleSubmit,
    formState: { errors: registerFormErrors }
  } = useForm<IFormInputRegister>({
    resolver: zodResolver(schemaRegister)
  });

  const handleRegister: SubmitHandler<IFormInputRegister> = (data): void => {
    console.log(data);
  };

  const registerFormControl: IOnSubmit = {
    onSubmit: handleSubmit(handleRegister)
  };

  return { registerInputControl, registerFormControl, registerFormErrors };
};

export default useRegister;
