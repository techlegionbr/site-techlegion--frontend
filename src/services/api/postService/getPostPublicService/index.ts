import apiRoutes from '@/services/constants/apiRoutes';
import { service } from '@/services/settings';

import { type IGetPostPublic, type IResponseGetPostPublic } from './types';

const getPostPublicService = async (
  titlePost: string
): Promise<IGetPostPublic> => {
  try {
    const {
      data: { post }
    } = await service.get<IResponseGetPostPublic>(
      `${apiRoutes.post.GET_POST_PUBLIC}/${titlePost}`
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

export default getPostPublicService;
