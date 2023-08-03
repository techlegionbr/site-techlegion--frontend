export type Flatten<T> = T extends object ? T[keyof T] : T;
export type ExcludePrimitives<T> = T extends boolean | string | number
  ? never
  : T;
