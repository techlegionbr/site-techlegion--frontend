import { create } from 'zustand';

import {
  type IUsePainelStoreActions,
  type IUsePainelStoreStates
} from './types';

const usePanelStore = create<IUsePainelStoreStates & IUsePainelStoreActions>(
  (set) => ({
    allEditors: null,
    allManagers: null,
    allPosts: null,
    editorsCreated: null,
    managersCreated: null,
    postsCreated: null,
    comments: null,

    setAllEditors: (editors) => {
      set({ allEditors: editors });
    },
    setAllManagers: (managers) => {
      set({ allManagers: managers });
    },
    setAllPosts: (posts) => {
      set({ allPosts: posts });
    },
    setEditorsCreated: (editors) => {
      set({ editorsCreated: editors });
    },
    setManagersCreated: (managers) => {
      set({ managersCreated: managers });
    },
    setPostsCreated: (posts) => {
      set({ postsCreated: posts });
    },
    setComments: (comments) => {
      set({ comments });
    }
  })
);

export default usePanelStore;
