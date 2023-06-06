import internalSiteTopicsResearch from '@/settings/search/internalSiteTopicsResearch';
import { type TypeDivisionTopicsSarched } from '@/settings/search/types';

const searchTopicsGeral = (
  searchedCharacter: string
): TypeDivisionTopicsSarched[] => {
  const removeSpecialCharAndHandleCase = (string: string): string => {
    return string
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  };

  const searchedCharacterTrated =
    removeSpecialCharAndHandleCase(searchedCharacter);

  const topicsSelected = internalSiteTopicsResearch.filter((topic) => {
    const nameTopicTrated = removeSpecialCharAndHandleCase(topic.name);

    return (
      nameTopicTrated.includes(searchedCharacterTrated) ||
      topic.tags
        .map((tag) => {
          const tagTrated = removeSpecialCharAndHandleCase(tag);
          return tagTrated.includes(searchedCharacterTrated);
        })
        .some(Boolean)
    );
  });

  const divisionSearchedTopics = Object.entries(
    Object.fromEntries(
      topicsSelected.map((topic) => [
        topic.type,
        topicsSelected.filter((topicFilter) => topicFilter.type === topic.type)
      ])
    )
  );

  return divisionSearchedTopics;
};

export default searchTopicsGeral;
