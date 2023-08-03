import apiRoutes from '@/services/constants/apiRoutes';
import { service } from '@/services/settings';

import { type IGetPostPrivate, type IResponseGetPostPrivate } from './types';

const getPostPrivateService = async (
  titlePost: string
): Promise<IGetPostPrivate> => {
  try {
    const {
      data: { post }
    } = await service.get<IResponseGetPostPrivate>(
      `${apiRoutes.post.GET_POST_PRIVATE}/${titlePost}`
    );
    return {
      error: false,
      post
    };
  } catch (error) {
    console.log(error);
    return {
      error: true,
      post: null
    };
  }
};

export default getPostPrivateService;
