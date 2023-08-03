import { type IAccordionQuestItem } from '@/components/accordions/AccordionsQuest/types';

export interface TypeService {
  name: string;
  image: string;
  introduction: string;
  benefits: string[];
  commonQuestions: IAccordionQuestItem[];
  value: number;
  icon: React.ReactNode;
}
