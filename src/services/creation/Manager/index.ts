import { type IFormCreateEditor } from '@/schemas/creation/Editor/types';
import apiRoutes from '@/services/constants/apiRoutes';
import { service } from '@/services/settings';
import { AxiosError } from 'axios';

import constants from './constants';
import { type ICreateManager, type IResponseCreateManager } from './types';

const createManagerService = async (
  manager: IFormCreateEditor
): Promise<ICreateManager> => {
  try {
    const { data } = await service.post<IResponseCreateManager>(
      apiRoutes.admin.CREATE_ADMIN,
      manager
    );
    return {
      data,
      error: false
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      return {
        data: error.response?.data ?? {
          admin: null,
          message: constants.GENERIC_ERROR_WHEN_TRYING_TO_CREATE_ADMIN
        },
        error: true
      };
    }
    return {
      data: {
        admin: null,
        message: constants.GENERIC_ERROR_WHEN_TRYING_TO_CREATE_ADMIN
      },
      error: true
    };
  }
};

export default createManagerService;
