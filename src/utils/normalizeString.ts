const normalizeString = (str: string, specificChar?: string): string => {
  const stringWithoutAccents = str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
  const regexRomoveCharsSpecial = new RegExp(
    `[^a-zA-Z0-9 ${specificChar ?? ''}]`,
    'g'
  );
  return stringWithoutAccents.replace(regexRomoveCharsSpecial, '');
};

export default normalizeString;
