import { type TypeAccoridion } from '@/patterns/Accordions/types';

export interface TypeService {
  name: string;
  image: string;
  introduction: string;
  benefits: string[];
  commonQuestions: TypeAccoridion[];
  value: number;
  icon: React.ReactNode;
}
