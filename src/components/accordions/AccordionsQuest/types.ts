import { type TModeTheme } from '@/styles/types';

export interface IAccordionQuestItem {
  name: string;
  question: string;
  response: React.ReactNode | string;
}

export interface IAccordionQuestProps {
  item: IAccordionQuestItem;
  show: boolean;
  onClick: (name: string) => void;
  modeTheme: TModeTheme;
}

export interface IAccordionsQuestProps {
  items: IAccordionQuestItem[];
  modeTheme?: TModeTheme;
}
