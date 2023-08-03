export type TRoutesAuth = 'LOGIN' | 'ROUTE';

export type TRoutesAdmin = 'CREATE_ADMIN';

export type TRoutesPost =
  | 'CREATE_POST'
  | 'GET_ALL_POSTS_PUBLIC'
  | 'GET_ALL_POSTS_PRIVATE'
  | 'GET_POST_PUBLIC'
  | 'GET_POST_PRIVATE';

export type TRoutesUser = 'GET_ALL_USERS' | 'CREATE_USER';
