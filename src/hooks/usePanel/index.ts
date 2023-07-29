/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';

import useAllEditorsQuery from '@/queries/editor/useAllEditorsQuery';
import useAllPostsPublicQuery from '@/queries/post/useAllPostsPublicQuery';
import usePanelStore from '@/stores/usePanelStore';

const usePanel = (): void => {
  const { data: allEditorsData } = useAllEditorsQuery();
  const { data: allPostsPublicData } = useAllPostsPublicQuery();

  const { setAllEditors, setAllPosts } = usePanelStore((state) => ({
    setAllEditors: state.setAllEditors,
    setAllPosts: state.setAllPosts
  }));

  useEffect(() => {
    setAllEditors(allEditorsData ?? null);
    setAllPosts(allPostsPublicData ?? null);
  }, [allEditorsData, allPostsPublicData]);
};

export default usePanel;
