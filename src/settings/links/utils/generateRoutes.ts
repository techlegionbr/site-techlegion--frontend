const generateRoutes = <T extends string>(
  routes: T[],
  base?: string
): Record<T, string> => {
  const routesEntries = Object.fromEntries(
    routes.map((route) => [route, `${base ? `${base}` : ''}/${String(route)}`])
  );

  return routesEntries as Record<T, string>;
};

export default generateRoutes;
