import apiRoutes from '@/services/constants/apiRoutes';
import { service } from '@/services/settings';

import {
  type IGetAllPostsPublic,
  type IResponseGetAllPostsPublic
} from './types';

const getAllEditorsService = async (): Promise<IGetAllPostsPublic> => {
  try {
    const {
      data: { posts }
    } = await service.get<IResponseGetAllPostsPublic>(
      apiRoutes.post.GET_ALL_POSTS_PUBLIC
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
