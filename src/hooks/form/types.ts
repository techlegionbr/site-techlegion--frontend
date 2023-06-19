import { type BaseSyntheticEvent } from 'react';

export interface IOnSubmit {
  onSubmit: (e: BaseSyntheticEvent<object> | undefined) => Promise<void>;
}
