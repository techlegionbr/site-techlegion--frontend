import { type IFormLogin } from '@/schemas/auth/types';
import apiRoutes from '@/services/constants/apiRoutes';
import { service } from '@/services/settings';
import { AxiosError } from 'axios';

import constants from './constants';
import { type IResponseFetchLogin, type IServiceLogin } from './types';

const loginService = async (login: IFormLogin): Promise<IServiceLogin> => {
  try {
    const { data } = await service.post<IResponseFetchLogin>(
      apiRoutes.AUTH_LOGIN,
      login
    );
    return { data, error: false };
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      const data: IResponseFetchLogin = error.response?.data || {
        entity: null,
        message: constants.GENERIC_ERROR_AUTH_LOGIN
      };
      return { data, error: true };
    } else {
      return {
        data: {
          entity: null,
          message: constants.GENERIC_ERROR_AUTH_LOGIN
        },
        error: true
      };
    }
  }
};

export default loginService;
