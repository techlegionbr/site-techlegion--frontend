const generateRoutes = <T>(routes: string[], base?: string): T => {
  const routesEntries = Object.fromEntries(
    routes.map((route) => [route, `${base ? `${base}` : ''}/${route}`])
  ) as T;

  return routesEntries;
};

export default generateRoutes;
