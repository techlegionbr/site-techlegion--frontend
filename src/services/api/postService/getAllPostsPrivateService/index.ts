import apiRoutes from '@/services/constants/apiRoutes';
import { service } from '@/services/settings';

import {
  type IResponseGetAllPostsPrivate,
  type IGetAllPostsPrivate
} from './types';

const getAllEditorsService = async (): Promise<IGetAllPostsPrivate> => {
  try {
    const {
      data: { posts }
    } = await service.get<IResponseGetAllPostsPrivate>(
      apiRoutes.post.GET_ALL_POSTS_PRIVATE
    );
    return {
      error: false,
      posts
    };
  } catch (error) {
    console.log(error);
    return {
      error: true,
      posts: null
    };
  }
};

export default getAllEditorsService;
