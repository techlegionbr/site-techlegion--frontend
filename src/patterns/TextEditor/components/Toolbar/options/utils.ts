import { v4 as uuidV4 } from 'uuid';

import { type IDropDownOption } from '../DropDownMenu/types';

const transpileOptionsWithId = <T extends string>(
  options: Array<Omit<IDropDownOption<T>, 'id'>>
): Array<IDropDownOption<T>> => {
  return options.map((option) => ({
    ...option,
    id: uuidV4()
  }));
};

export default transpileOptionsWithId;
