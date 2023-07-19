import { type IFormCreateEditor } from '@/schemas/creation/Editor/types';
import apiRoutes from '@/services/constants/apiRoutes';
import { service } from '@/services/settings';
import { AxiosError } from 'axios';

import constants from './constants';
import { type ICreateEditor, type IResponseCreateEditor } from './types';

const createEditorService = async (
  editor: IFormCreateEditor
): Promise<ICreateEditor> => {
  try {
    const { data } = await service.post<IResponseCreateEditor>(
      apiRoutes.user.CREATE_USER,
      editor
    );
    return {
      data,
      error: false
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      return {
        data: error.response?.data ?? {
          user: null,
          message: constants.GENERIC_ERROR_WHEN_TRYING_TO_CREATE_ADMIN
        },
        error: true
      };
    }
    return {
      data: {
        user: null,
        message: constants.GENERIC_ERROR_WHEN_TRYING_TO_CREATE_ADMIN
      },
      error: true
    };
  }
};

export default createEditorService;
