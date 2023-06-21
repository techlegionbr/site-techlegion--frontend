import { type TPermission } from '@/queries/auth/router/types';

import { type TSectionRouteName } from '../patterns/NavBarVertical/types';

const handlePermissionRoutes = (
  permissions: TPermission[]
): TSectionRouteName[] => {
  const permissionsRoutes: Record<TSectionRouteName, TPermission[]> = {
    comments: ['createPost', 'manageAllPosts', 'managePost'],
    editors: ['manageUser', 'manageAllUsers', 'createUser'],
    managers: ['createAdmin', 'manageAdmin', 'manageAllAdmins'],
    panel: ['seePanel'],
    posts: ['createPost', 'manageAllPosts', 'managePost'],
    profile: ['editProfile'],
    settings: ['editProfile', 'seePanel']
  };

  const entriesRoutesMatchPermissions = Object.entries(
    permissionsRoutes
  ).filter(([, permissionsI]) =>
    permissionsI.some((permissionI) => permissions.includes(permissionI))
  );

  const routesNameSelected = entriesRoutesMatchPermissions.map(
    ([routeName]) => routeName
  );

  return routesNameSelected as TSectionRouteName[];
};

export default handlePermissionRoutes;
