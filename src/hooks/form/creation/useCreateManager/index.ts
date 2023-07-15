import { type SubmitHandler, useForm } from 'react-hook-form';

import { schemaCreateManager } from '@/schemas/creation/Manager';
import { type IFormCreateManager } from '@/schemas/creation/Manager/types';
import createManagerService from '@/services/creation/Manager';
import { zodResolver } from '@hookform/resolvers/zod';

import { type IOnSubmit } from '../../types';
import { type IStateCreateManager } from './types';

const useCreateManager = (): IStateCreateManager => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormCreateManager>({
    resolver: zodResolver(schemaCreateManager)
  });

  const handleCreateManager: SubmitHandler<IFormCreateManager> = async (
    manager
  ): Promise<void> => {
    const { data, error } = await createManagerService(manager);
    console.log(data, error);
  };

  const formControl: IOnSubmit = {
    onSubmit: handleSubmit(handleCreateManager)
  };

  return {
    control,
    register,
    formControl,
    errors
  };
};

export default useCreateManager;
