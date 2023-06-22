export interface IAccordionQuestItem {
  name: string;
  question: string;
  response: string;
}

export interface IAccordionQuestProps {
  item: IAccordionQuestItem;
  show: boolean;
  onClick: (name: string) => void;
}

export interface IAccordionsQuestProps {
  items: IAccordionQuestItem[];
}
