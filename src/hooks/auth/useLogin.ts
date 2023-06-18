import {
  useState,
  type BaseSyntheticEvent,
  type Dispatch,
  type SetStateAction
} from 'react';
import {
  useForm,
  type UseFormRegister,
  type SubmitHandler,
  type FieldErrors
} from 'react-hook-form';

import { schemaLogin } from '@/schemas/auth/login';
import { type IFormLogin } from '@/schemas/auth/types';
import loginService from '@/services/auth/login';
import { hostLinks } from '@/settings/links';
import { zodResolver } from '@hookform/resolvers/zod';

import { useRouter } from 'next/router';

interface IStateRegister {
  loginFormControl: IOnSubmit;
  loginInputControl: UseFormRegister<IFormLogin>;
  loginFormErrors: FieldErrors<IFormLogin>;
  blockForm: boolean;
  alertLogin: IAlertLogin;
  setAlertLogin: Dispatch<SetStateAction<IAlertLogin>>;
}

interface IAlertLogin {
  show: boolean;
  status: 'error' | 'success' | null;
  helperText: {
    sup: string;
    main: string;
  };
  onClose: () => void;
}

interface IOnSubmit {
  onSubmit: (
    e: BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
}

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
          void router.push(
            entity === 'user' ? hostLinks.painels.user : hostLinks.painels.admin
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
