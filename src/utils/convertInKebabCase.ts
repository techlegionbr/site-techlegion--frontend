import normalizeString from './normalizeString';

const convertInKebabCase = (string: string): string => {
  return normalizeString(string, '-').replace(/\s/g, '-').toLowerCase();
};

export default convertInKebabCase;
