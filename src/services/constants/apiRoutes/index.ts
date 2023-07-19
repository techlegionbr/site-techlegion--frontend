import { type TRoutesUser, type TRoutesAdmin, type TRoutesAuth } from './types';
import assignRoutes from './utils';

const apiRoutes = {
  auth: {
    ...assignRoutes<TRoutesAuth>('/auth', {
      LOGIN: '/login',
      ROUTE: '/auth-route'
    })
  },
  admin: {
    ...assignRoutes<TRoutesAdmin>('/admin', {
      CREATE_ADMIN: '/create-admin'
    })
  },
  user: {
    ...assignRoutes<TRoutesUser>('/user', {
      CREATE_USER: '/create-user'
    })
  }
};

export default apiRoutes;
