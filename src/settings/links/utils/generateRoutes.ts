const generateRoutes = (
  routes: string[],
  base?: string
): Record<string, string> => {
  const routesEntries = routes.map((route) => [
    route,
    `${base ? `${base}` : ''}/${route}`
  ]);
  return Object.fromEntries(routesEntries);
};

export default generateRoutes;
