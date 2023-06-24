import { type TModeTheme } from '@/styles/types';

export type TAccordionParam = [service: string, show: boolean];

export interface TAccordionCircleItem {
  title: string;
  description: React.ReactNode | string;
  icon: React.ReactNode;
}

export interface IAccordionCircleProps {
  item: TAccordionCircleItem;
  modeTheme: TModeTheme;
  showDescription: boolean;
  onClick: (item: TAccordionParam) => void;
}

export interface IAccordionsCircleProps {
  items: TAccordionCircleItem[];
  modeTheme?: TModeTheme;
}
