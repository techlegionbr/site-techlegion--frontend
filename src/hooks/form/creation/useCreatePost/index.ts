import { useEffect, useState } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';

import { schemaCreatePost } from '@/schemas/creation/Post';
import { type IFormCreatePost } from '@/schemas/creation/Post/types';
import { postService } from '@/services/api/postService';
import convertInKebabCase from '@/utils/convertInKebabCase';
import { zodResolver } from '@hookform/resolvers/zod';

import { type IOnSubmit } from '../../types';
import { type IStateCreatePost } from './types';

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
      metaDescription: '',
      metaTitle: '',
      postHTML: '',
      routeName: ''
    }
  });

  const { routeName } = watch();

  const [isResetting, setIsResetting] = useState(false);

  useEffect(() => {
    setValue('routeName', convertInKebabCase(routeName));
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
    const { data, error } = await postService.createPost(post);
    console.log(data, error);
  };

  const formControl: IOnSubmit = {
    onSubmit: handleSubmit(handleCreatePost)
  };
  return {
    control,
    formControl,
    errors,
    isResetting,
    watch
  };
};

export default useCreatePost;
