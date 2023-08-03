import { type ReactNode } from 'react';

export interface IDropDownOption<T extends string> {
  id: string;
  value: T;
  label: ReactNode | string;
}

export interface IDropDownMenuProps {
  options: Array<IDropDownOption<string>>;
  onChange?: (value: string | null) => void;
  width?: number;
  title?: string;
  value?: string;
}
