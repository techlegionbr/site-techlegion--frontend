import { type UseQueryResult, useQuery } from 'react-query';

import queryKeys from '@/queries/constants/queryKeys';
import apiRoutes from '@/services/constants/apiRoutes';
import { service } from '@/services/settings';

import { type IResponseFetchVerificationTokenAuth } from './types';

const getAuthRouter =
  async (): Promise<IResponseFetchVerificationTokenAuth> => {
    const { data } = await service.get<IResponseFetchVerificationTokenAuth>(
      apiRoutes.AUTH_ROUTE,
      {
        withCredentials: true
      }
    );
    return data;
  };

const useFetchAuthRouter =
  (): UseQueryResult<IResponseFetchVerificationTokenAuth> => {
    return useQuery(
      [queryKeys.KEY_TOKEN_VERIFICATION_FOR_AUTH_ROUTER],
      getAuthRouter,
      {
        staleTime: 1000 * 60 // 1 minuto
      }
    );
  };

export default useFetchAuthRouter;
