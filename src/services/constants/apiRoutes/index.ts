import {
  type TRoutesUser,
  type TRoutesAdmin,
  type TRoutesAuth,
  type TRoutesPost
} from './types';
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
      GET_ALL_USERS: '/get-all-users',
      CREATE_USER: '/create-user'
    })
  },
  post: {
    ...assignRoutes<TRoutesPost>('/post', {
      CREATE_POST: '/create-post',
      GET_ALL_POSTS_PRIVATE: '/get-all-posts-private',
      GET_ALL_POSTS_PUBLIC: '/get-all-posts-public',
      GET_POST_PUBLIC: '/get-post-public',
      GET_POST_PRIVATE: '/get-post-private'
    })
  }
};

export default apiRoutes;
