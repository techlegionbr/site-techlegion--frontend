import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';

import { schemaLogin } from '@/schemas/auth/login';
import { type IFormLogin } from '@/schemas/auth/login/types';
import loginService from '@/services/auth/login';
import { zodResolver } from '@hookform/resolvers/zod';

import { useRouter } from 'next/router';

import { type IOnSubmit } from '../../types';
import { type IAlertLogin, type IStateRegister } from './types';

const useLogin = (): IStateRegister => {
  const defaultAlertLogin: IAlertLogin = {
    show: false,
    status: null,
    helperText: {
      sup: '',
      main: ''
    },
    onClose: () => {
      setAlertLogin(defaultAlertLogin);
    }
  };

  const {
    register: loginInputControl,
    handleSubmit,
    formState: { errors: loginFormErrors }
  } = useForm<IFormLogin>({
    resolver: zodResolver(schemaLogin)
  });

  const router = useRouter();

  const [blockForm, setBlockForm] = useState(false);
  const [alertLogin, setAlertLogin] = useState<IAlertLogin>(defaultAlertLogin);

  const handleLogin: SubmitHandler<IFormLogin> = async (
    data
  ): Promise<void> => {
    setBlockForm(true);
    const { data: responseLogin, error } = await loginService(data);
    const { entity, message } = responseLogin;

    if (error) {
      setAlertLogin((prevAlert) => ({
        ...prevAlert,
        show: true,
        status: 'error',
        helperText: {
          sup: 'Ocorreu um erro!',
          main: message
        }
      }));
      setBlockForm(false);
    } else if (entity) {
      setAlertLogin({
        show: true,
        status: 'success',
        helperText: {
          sup: 'Sucesso!',
          main: message
        },
        onClose: () => {
          setAlertLogin(defaultAlertLogin);
          void router.replace(`/painels/${entity}`);
        }
      });
    } else {
      setAlertLogin((prevAlert) => ({
        ...prevAlert,
        show: true,
        status: 'error',
        helperText: {
          sup: 'Ocorreu um erro!',
          main: 'Ocorreu um erro no redirecionamento!'
        }
      }));
      setBlockForm(false);
    }
    console.log(responseLogin, error);
  };

  const loginFormControl: IOnSubmit = {
    onSubmit: handleSubmit(handleLogin)
  };

  return {
    loginInputControl,
    loginFormControl,
    loginFormErrors,
    blockForm,
    alertLogin,
    setAlertLogin
  };
};

export default useLogin;
