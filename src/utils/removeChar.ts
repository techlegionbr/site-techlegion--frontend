const removeChar = (string: string, char: string, global: boolean): string => {
  return string[global ? 'replaceAll' : 'replace'](char, '');
};

export default removeChar;
