import { type UseQueryResult, useQuery } from 'react-query';

import queryKeys from '@/queries/constants/queryKeys';
import apiRoutes from '@/services/constants/apiRoutes';
import { service } from '@/services/settings';

import { type IResponseFetchAuthRouter } from './types';

const fetchAuthRouter = async (): Promise<IResponseFetchAuthRouter> => {
  const { data } = await service.get<IResponseFetchAuthRouter>(
    apiRoutes.auth.ROUTE
  );
  return data;
};

const useAuthRouterQuery = (): UseQueryResult<IResponseFetchAuthRouter> => {
  return useQuery(
    [queryKeys.KEY_TOKEN_VERIFICATION_FOR_AUTH_ROUTER],
    fetchAuthRouter,
    {
      staleTime: 1000 * 60, // 1 minuto
      refetchOnWindowFocus: 'always'
    }
  );
};

export default useAuthRouterQuery;
