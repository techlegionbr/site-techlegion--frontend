import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { useQueryClient } from 'react-query';

import queryKeys from '@/queries/constants/queryKeys';
import { schemaLogin } from '@/schemas/auth/login';
import { type IFormLogin } from '@/schemas/auth/login/types';
import loginService from '@/services/auth/login';
import { hostLinks } from '@/settings/links';
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

  const queryClient = useQueryClient();

  const handleLogin: SubmitHandler<IFormLogin> = async (
    data
  ): Promise<void> => {
    setBlockForm(true);
    const { data: responseLogin, error } = await loginService(data);
    const { levelAccess, message } = responseLogin;

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
    } else if (levelAccess) {
      setAlertLogin({
        show: true,
        status: 'success',
        helperText: {
          sup: 'Sucesso!',
          main: message
        },
        onClose: async () => {
          await queryClient.invalidateQueries(
            queryKeys.KEY_TOKEN_VERIFICATION_FOR_AUTH_ROUTER
          );
          setAlertLogin(defaultAlertLogin);
          await router.replace(
            levelAccess === 'user'
              ? hostLinks.painel.user
              : hostLinks.painel.admin
          );
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
