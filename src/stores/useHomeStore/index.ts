import { create } from 'zustand';

import { type IUseHomeStoreActions, type IUseHomeStoreStates } from './types';

const useHomeStore = create<IUseHomeStoreStates & IUseHomeStoreActions>(
  (set) => ({
    allPosts: null,

    setAllPosts: (setCb) => {
      set((state) => ({
        allPosts:
          typeof setCb === 'function' ? setCb(state.allPosts ?? []) : setCb
      }));
    }
  })
);

export default useHomeStore;
