import { type SubmitHandler, useForm } from 'react-hook-form';

import { schemaContact } from '@/schemas/contact';
import { type IFormContact } from '@/schemas/contact/types';
import { zodResolver } from '@hookform/resolvers/zod';

import { type IOnSubmit } from '../types';
import { type IStateContact } from './types';

const useContact = (): IStateContact => {
  const {
    handleSubmit,
    formState: { errors },
    register
  } = useForm<IFormContact>({
    resolver: zodResolver(schemaContact)
  });

  const handleContact: SubmitHandler<IFormContact> = async (
    data
  ): Promise<void> => {
    console.log(data);
  };

  const formControl: IOnSubmit = {
    onSubmit: handleSubmit(handleContact)
  };

  return { errors, register, formControl };
};

export default useContact;
