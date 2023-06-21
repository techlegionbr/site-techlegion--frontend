import { color } from '@/styles/root';

export const handlersConditionInput = {
  label: (focus: boolean, error: boolean) =>
    focus && !error ? color.light : error ? color.danger : '#ffffffc3',
  borderColor: (focus: boolean, error: boolean) =>
    focus && !error ? '#ffffffc2' : error ? color.danger : '#ffffff6d',
  color: (focus: boolean, error: boolean) =>
    error ? color.danger : focus ? color.light : '#ffffffc3',
  placeholderColor: (focus: boolean, error: boolean) =>
    error ? color.danger : focus ? color.light : '#ffffff8b',
  bthToggleType: (focus: boolean, error: boolean) => (
    error ? color.danger :
      focus ? color.light : "#ffffffc3"
  )
};

