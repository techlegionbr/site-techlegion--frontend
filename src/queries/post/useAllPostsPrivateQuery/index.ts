import { type UseQueryResult, useQuery } from 'react-query';

import { type IResponseFetchAuthRouter } from '@/queries/auth/useAuthRouterQuery/types';
import queryKeys from '@/queries/constants/queryKeys';
import { type IResponseGetAllPostsPrivate } from '@/services/api/postService/getAllPostsPrivateService/types';
import apiRoutes from '@/services/constants/apiRoutes';
import { queryClient } from '@/services/queryClient';
import { service } from '@/services/settings';
import { type IPostPrivate } from '@/types/IPost';
import handlePermissionRoutes from '@/utils/painel/handlePermissionRoutes';

const fetchAllPostsPrivate = async (): Promise<IPostPrivate[]> => {
  const {
    data: { posts }
  } = await service.get<IResponseGetAllPostsPrivate>(
    apiRoutes.post.GET_ALL_POSTS_PUBLIC
  );
  return posts;
};

const useAllPostsPrivateQuery = (): UseQueryResult<IPostPrivate[]> => {
  const fetchAuthRouter: IResponseFetchAuthRouter | undefined =
    queryClient.getQueryData([
      queryKeys.KEY_TOKEN_VERIFICATION_FOR_AUTH_ROUTER
    ]);

  return useQuery(
    [queryKeys.KEY_TOKEN_FETCH_ALL_POSTS_PRIVATE],
    fetchAllPostsPrivate,
    {
      staleTime: 1000 * (60 * 5), // 5 minuto
      refetchOnWindowFocus: 'always',
      enabled: fetchAuthRouter?.permissions
        ? handlePermissionRoutes(fetchAuthRouter.permissions).includes('posts')
        : false
    }
  );
};

export default useAllPostsPrivateQuery;
