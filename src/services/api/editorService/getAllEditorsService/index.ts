import apiRoutes from '@/services/constants/apiRoutes';
import { service } from '@/services/settings';

import { type IGetAllEditors, type IResponseGetAllEditors } from './types';

const getAllEditorsService = async (): Promise<IGetAllEditors> => {
  try {
    const {
      data: { users }
    } = await service.get<IResponseGetAllEditors>(apiRoutes.user.GET_ALL_USERS);
    return {
      error: false,
      users
    };
  } catch (error) {
    console.log(error);
    return {
      error: true,
      users: null
    };
  }
};

export default getAllEditorsService;
