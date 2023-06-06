export interface TypeSearchedTopic {
  type: string;
  name: string;
  shortDescription: string;
  redirect: string;
  tags: string[];
}

export type TypeDivisionTopicsSarched = [
  type: string,
  searchResults: TypeSearchedTopic[]
];
