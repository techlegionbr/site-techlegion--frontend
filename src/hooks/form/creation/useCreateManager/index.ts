import { useState, useEffect } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';

import { schemaCreateManager } from '@/schemas/creation/Manager';
import { type IFormCreateManager } from '@/schemas/creation/Manager/types';
import { managerService } from '@/services/api/managerService';
import { zodResolver } from '@hookform/resolvers/zod';

import { type IOnSubmit } from '../../types';
import {
  type IAlertDefault,
  type IAlertNewEntitie,
  type IStateCreateManager
} from './types';

const useCreateManager = (): IStateCreateManager => {
  const {
    control,
    handleSubmit,
    reset: resetInputs,
    formState: { errors }
  } = useForm<IFormCreateManager>({
    resolver: zodResolver(schemaCreateManager),
    defaultValues: {
      email: '',
      name: '',
      weeklyEditorCreationLimit: '',
      weeklyManagerCreationLimit: '',
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

  const handleCreateManager: SubmitHandler<IFormCreateManager> = async (
    manager
  ): Promise<void> => {
    const {
      data: { admin, message },
      error
    } = await managerService.create(manager);

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
        if (!error && admin) {
          setAlertNewEntitie({
            show: true,
            entitie: admin
          });
        }
      }
    });
  };

  const formControl: IOnSubmit = {
    onSubmit: handleSubmit(handleCreateManager)
  };

  return {
    isResetting,
    control,
    formControl,
    errors,
    alertNewEntitie,
    setAlertNewEntitie,
    alertDefault
  };
};

export default useCreateManager;
