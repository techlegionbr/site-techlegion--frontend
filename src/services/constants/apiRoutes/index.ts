import { type TRoutesAdmin, type TRoutesAuth } from './types';
import assignRoutes from './utils';

const apiRoutes = {
  auth: {
    ...assignRoutes<TRoutesAuth>('/auth', {
      LOGIN: '/login',
      ROUTE: '/auth-route'
    })
  },
  admin: {
    ...assignRoutes<TRoutesAdmin>('/entity/admin', {
      CREATE_ADMIN: '/create-admin',
      CREATE_USER: '/create-user'
    })
  }
};

export default apiRoutes;
