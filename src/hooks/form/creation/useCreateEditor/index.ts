import { type SubmitHandler, useForm } from 'react-hook-form';

import { schemaCreateEditor } from '@/schemas/creation/Editor';
import { type IFormCreateEditor } from '@/schemas/creation/Editor/types';
import createEditorService from '@/services/creation/Editor';
import { zodResolver } from '@hookform/resolvers/zod';

import { type IOnSubmit } from '../../types';
import { type IStateCreateEditor } from './types';

const useCreateEditor = (): IStateCreateEditor => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormCreateEditor>({
    resolver: zodResolver(schemaCreateEditor)
  });

  const handleCreateEditor: SubmitHandler<IFormCreateEditor> = async (
    editor
  ): Promise<void> => {
    const { data, error } = await createEditorService(editor);
  };

  const formControl: IOnSubmit = {
    onSubmit: handleSubmit(handleCreateEditor)
  };

  return {
    control,
    errors,
    register,
    formControl
  };
};

export default useCreateEditor;
