import { type ChangeEvent } from 'react';

import VMasker from 'vanilla-masker';

const maskInput = (e: ChangeEvent<HTMLInputElement>, mask: string): void => {
  const inputReference = e.target;
  const maskedValue = VMasker.toPattern(inputReference.value, mask);

  inputReference.value = maskedValue;
};

export default maskInput;
