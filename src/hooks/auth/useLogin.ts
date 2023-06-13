import { type BaseSyntheticEvent } from 'react';
import {
  useForm,
  type UseFormRegister,
  type SubmitHandler,
  type FieldErrors
} from 'react-hook-form';

import { schemaRegister } from '@/schamas/auth/register';
import { type IFormInputLogin } from '@/schamas/auth/types';
import { zodResolver } from '@hookform/resolvers/zod';

interface IStateRegister {
  loginFormControl: IOnSubmit;
  loginInputControl: UseFormRegister<IFormInputLogin>;
  loginFormErrors: FieldErrors<IFormInputLogin>;
}

interface IOnSubmit {
  onSubmit: (
    e: BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
}

const useLogin = (): IStateRegister => {
  const {
    register: loginInputControl,
    handleSubmit,
    formState: { errors: loginFormErrors }
  } = useForm<IFormInputLogin>({
    resolver: zodResolver(schemaRegister)
  });

  const handleLogin: SubmitHandler<IFormInputLogin> = (data): void => {
    console.log(data);
  };

  const loginFormControl: IOnSubmit = {
    onSubmit: handleSubmit(handleLogin)
  };

  return { loginInputControl, loginFormControl, loginFormErrors };
};

export default useLogin;
