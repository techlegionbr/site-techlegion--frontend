import ourValues from './data/ourValues';
import sellMore from './data/sellMore';
import services from './data/services';
import { type TypeSearchedTopic } from './types';

const internalSiteTopicsResearch: TypeSearchedTopic[] = [
  ...services,
  ...ourValues,
  ...sellMore
];

export default internalSiteTopicsResearch;
