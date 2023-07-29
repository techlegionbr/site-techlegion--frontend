import { type UseQueryResult, useQuery } from 'react-query';

import queryKeys from '@/queries/constants/queryKeys';
import { type IResponseGetAllPostsPublic } from '@/services/api/postService/getAllPostsPublicService/types';
import apiRoutes from '@/services/constants/apiRoutes';
import { service } from '@/services/settings';
import { type IPostPublic } from '@/types/IPost';

const fetchAllPostsPublic = async (): Promise<IPostPublic[]> => {
  const {
    data: { posts }
  } = await service.get<IResponseGetAllPostsPublic>(
    apiRoutes.post.GET_ALL_POSTS_PUBLIC
  );
  return posts;
};

const useAllPostsPublicQuery = (): UseQueryResult<IPostPublic[]> => {
  return useQuery(
    [queryKeys.KEY_TOKEN_FETCH_ALL_POSTS_PUBLIC],
    fetchAllPostsPublic,
    {
      staleTime: 1000 * (60 * 5), // 5 minuto
      refetchOnWindowFocus: 'always'
    }
  );
};

export default useAllPostsPublicQuery;
