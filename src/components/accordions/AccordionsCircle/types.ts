export type TAccordionParam = [service: string, show: boolean];

export interface TAccordionCircleItem {
  title: string;
  description: React.ReactNode;
  icon: React.ReactNode;
}

export interface IAccordionCircleProps {
  item: TAccordionCircleItem;
  showDescription: boolean;
  onClick: (item: TAccordionParam) => void;
}

export interface IAccordionsCircleProps {
  items: TAccordionCircleItem[];
}
