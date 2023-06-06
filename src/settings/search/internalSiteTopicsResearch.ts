import ourValues from './data/ourValues';
import services from './data/services';
import { type TypeSearchedTopic } from './types';

const internalSiteTopicsResearch: TypeSearchedTopic[] = [
  ...services,
  ...ourValues
];

export default internalSiteTopicsResearch;
