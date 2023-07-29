const convertInKebabCase = (string: string): string => {
  return string
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s-]/g, '')
    .replace(/\s/g, '-')
    .toLowerCase();
};

export default convertInKebabCase;
