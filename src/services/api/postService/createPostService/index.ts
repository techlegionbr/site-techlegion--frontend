import { type IFormCreatePost } from '@/schemas/creation/Post/types';
import apiRoutes from '@/services/constants/apiRoutes';
import { service } from '@/services/settings';
import { AxiosError } from 'axios';

import constants from './constants';
import { type ICreatePost, type IResponseCreatePost } from './types';

const createPostService = async (
  post: IFormCreatePost
): Promise<ICreatePost> => {
  try {
    const { data } = await service.post<IResponseCreatePost>(
      apiRoutes.post.CREATE_POST,
      post
    );
    return {
      data,
      error: false
    };
  } catch (error) {
    return {
      data: {
        post: null,
        message:
          error instanceof AxiosError
            ? error.response?.data.message ??
              constants.GENERIC_ERROR_WHEN_TRYING_TO_CREATE_POST
            : constants.GENERIC_ERROR_WHEN_TRYING_TO_CREATE_POST
      },
      error: true
    };
  }
};

export default createPostService;
