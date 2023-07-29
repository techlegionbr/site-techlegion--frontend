import { useEffect, useState } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';

import { schemaCreateEditor } from '@/schemas/creation/Editor';
import { type IFormCreateEditor } from '@/schemas/creation/Editor/types';
import { editorService } from '@/services/api/editorService';
import { zodResolver } from '@hookform/resolvers/zod';

import { type IOnSubmit } from '../../types';
import {
  type IAlertDefault,
  type IAlertNewEntitie,
  type IStateCreateEditor
} from './types';

const useCreateEditor = (): IStateCreateEditor => {
  const {
    control,
    handleSubmit,
    reset: resetInputs,
    formState: { errors }
  } = useForm<IFormCreateEditor>({
    resolver: zodResolver(schemaCreateEditor),
    defaultValues: {
      name: '',
      email: '',
      weeklyPostCreationLimit: '',
      whatsapp: ''
    }
  });

  const [isResetting, setIsResetting] = useState(false);

  const [alertNewEntitie, setAlertNewEntitie] = useState<IAlertNewEntitie>({
    show: false,
    entitie: null
  });

  const [alertDefault, setAlertDefault] = useState<IAlertDefault>({
    helperText: {
      main: '',
      sup: ''
    },
    show: false,
    status: null
  });

  useEffect(() => {
    if (isResetting) {
      resetInputs();
      setTimeout(() => {
        setIsResetting(false);
      }, 100);
    }
  }, [isResetting, resetInputs]);

  const handleCreateEditor: SubmitHandler<IFormCreateEditor> = async (
    editor
  ): Promise<void> => {
    const {
      data: { message, user },
      error
    } = await editorService.create(editor);

    if (!error) {
      setIsResetting(true);
    }
    setAlertDefault({
      status: error ? 'error' : 'success',
      helperText: {
        main: message,
        sup: ''
      },
      show: true,
      onClose: () => {
        setAlertDefault({
          helperText: {
            main: '',
            sup: ''
          },
          status: null,
          show: false
        });
        if (!error && user) {
          setAlertNewEntitie({
            show: true,
            entitie: user
          });
        }
      }
    });
  };

  const formControl: IOnSubmit = {
    onSubmit: handleSubmit(handleCreateEditor)
  };

  return {
    control,
    errors,
    formControl,
    alertDefault,
    alertNewEntitie,
    isResetting,
    setAlertNewEntitie
  };
};

export default useCreateEditor;
