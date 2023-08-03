import capitalizeString from './capitalizeString';

const abbreviateName = (name: string): string => {
  const elementsLig = ['de', 'da', 'do', 'das', 'dos', "d'", 'o', 'a', 'e'];
  const [firstName, ...restName] = name
    .toLowerCase()
    .split(' ')
    .filter((elName) => !elementsLig.includes(elName));
  const lastName = restName[restName.length - 1];
  const middleName = restName.splice(0, restName.length - 1);
  const middleAcronyms =
    middleName.length !== 0
      ? middleName.map((elName) => `${elName[0]}.`).join(' ')
      : '';
  const nameAbbreviate = `${firstName} ${middleAcronyms} ${lastName}`;
  return capitalizeString(nameAbbreviate);
};

export default abbreviateName;
