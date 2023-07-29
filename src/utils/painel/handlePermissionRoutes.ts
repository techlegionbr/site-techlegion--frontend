import { type TSectionRouteName } from '@/templates/Panel/patterns/layout/NavBarVertical/types';
import { type TPermission } from '@/types/IPermission';

const handlePermissionRoutes = (
  accessPermissions: TPermission[] | null
): TSectionRouteName[] => {
  if (!accessPermissions) return [];
  const permissionsRoutes: Record<
    TSectionRouteName,
    Array<TPermission[] | TPermission>
  > = {
    comments: ['seePanel', ['createPost', 'manageAllPosts', 'managePost']],
    editors: ['seePanel', ['manageUser', 'manageAllUsers', 'createUser']],
    managers: ['seePanel', ['createAdmin', 'manageAdmin', 'manageAllAdmins']],
    panel: ['seePanel'],
    posts: ['seePanel', ['createPost', 'manageAllPosts', 'managePost']],
    profile: ['seePanel', 'editProfile'],
    settings: ['seePanel', 'editProfile']
  };

  const routesWithPermissions = Object.entries(permissionsRoutes);

  const entriesRoutesMatchPermissions = routesWithPermissions.filter(
    ([, permissions]) =>
      permissions.every((permission) =>
        typeof permission === 'string'
          ? accessPermissions.includes(permission)
          : permission.some((subPermission) =>
              accessPermissions.includes(subPermission)
            )
      )
  );

  const routesNameSelected = entriesRoutesMatchPermissions.map(
    ([routeName]) => routeName
  );

  return routesNameSelected as TSectionRouteName[];
};

export default handlePermissionRoutes;
