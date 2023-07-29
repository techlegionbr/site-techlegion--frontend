import { type UseQueryResult, useQuery } from 'react-query';

import { type IResponseFetchAuthRouter } from '@/queries/auth/useAuthRouterQuery/types';
import queryKeys from '@/queries/constants/queryKeys';
import { type IResponseGetAllEditors } from '@/services/api/editorService/getAllEditorsService/types';
import apiRoutes from '@/services/constants/apiRoutes';
import { queryClient } from '@/services/queryClient';
import { service } from '@/services/settings';
import { type IEditorPublic } from '@/types/IEditor';
import handlePermissionRoutes from '@/utils/painel/handlePermissionRoutes';

const fetchAllEditors = async (): Promise<IEditorPublic[]> => {
  const { data } = await service.get<IResponseGetAllEditors>(
    apiRoutes.user.GET_ALL_USERS
  );
  return data.users;
};

const useAllEditorsQuery = (): UseQueryResult<IEditorPublic[]> => {
  const fetchAuthRouter: IResponseFetchAuthRouter | undefined =
    queryClient.getQueryData([
      queryKeys.KEY_TOKEN_VERIFICATION_FOR_AUTH_ROUTER
    ]);

  return useQuery([queryKeys.KEY_TOKEN_FETCH_ALL_EDITORS], fetchAllEditors, {
    staleTime: 1000 * (60 * 5), // 5 minuto
    refetchOnWindowFocus: 'always',
    enabled: fetchAuthRouter?.permissions
      ? handlePermissionRoutes(fetchAuthRouter.permissions).includes('posts')
      : false
  });
};

export default useAllEditorsQuery;
