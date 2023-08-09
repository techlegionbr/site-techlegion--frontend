import { useEffect, useState } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';

import { schemaCreatePost } from '@/schemas/creation/Post';
import { type IFormCreatePost } from '@/schemas/creation/Post/types';
import { postService } from '@/services/api/postService';
import usePanelStore from '@/stores/usePanelStore';
import convertInKebabCase from '@/utils/convertInKebabCase';
import { zodResolver } from '@hookform/resolvers/zod';

import { type IOnSubmit } from '../../types';
import {
  type IAlertDefault,
  type IAlertNewEntitie,
  type IStateCreatePost
} from './types';

const useCreatePost = (): IStateCreatePost => {
  const {
    control,
    handleSubmit,
    reset: resetInputs,
    watch,
    setValue,
    formState: { errors }
  } = useForm<IFormCreatePost>({
    resolver: zodResolver(schemaCreatePost),
    defaultValues: {
      content: {
        rawString: ''
      },
      head: {
        description: '',
        title: ''
      },
      route: {
        name: ''
      }
    }
  });
  const setAllPosts = usePanelStore((state) => state.setAllPosts);

  const {
    route: { name: routeName }
  } = watch();

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
    setValue('route.name', convertInKebabCase(routeName));
  }, [setValue, routeName]);

  useEffect(() => {
    if (isResetting) {
      resetInputs();
      setTimeout(() => {
        setIsResetting(false);
      }, 100);
    }
  }, [isResetting, resetInputs]);

  const handleCreatePost: SubmitHandler<IFormCreatePost> = async (post) => {
    const {
      data: { message, post: postCreated },
      error
    } = await postService.createPost(post);
    if (!error && postCreated) {
      setIsResetting(true);
      setAllPosts((prevPosts) => [...prevPosts, postCreated]);
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
        if (!error && postCreated) {
          setAlertNewEntitie({
            show: true,
            entitie: {
              title: postCreated.head.title,
              nameRoute: postCreated.route.name
            }
          });
        }
      }
    });
  };

  const formControl: IOnSubmit = {
    onSubmit: handleSubmit(handleCreatePost)
  };
  return {
    control,
    formControl,
    errors,
    isResetting,
    watch,
    alertDefault,
    alertNewEntitie,
    setAlertNewEntitie
  };
};

export default useCreatePost;
