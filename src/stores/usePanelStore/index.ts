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

    setAllEditors: (setCb) => {
      set((state) => ({
        allEditors:
          typeof setCb === 'function' ? setCb(state.allEditors ?? []) : setCb
      }));
    },
    setAllManagers: (setCb) => {
      set((state) => ({
        allManagers:
          typeof setCb === 'function' ? setCb(state.allManagers ?? []) : setCb
      }));
    },
    setAllPosts: (setCb) => {
      set((state) => {
        const allPosts =
          typeof setCb === 'function' ? setCb(state.allPosts ?? []) : setCb;
        return {
          allPosts
        };
      });
    },
    setEditorsCreated: (setCb) => {
      set((state) => ({
        editorsCreated:
          typeof setCb === 'function'
            ? setCb(state.editorsCreated ?? [])
            : setCb
      }));
    },
    setManagersCreated: (setCb) => {
      set((state) => ({
        managersCreated:
          typeof setCb === 'function'
            ? setCb(state.managersCreated ?? [])
            : setCb
      }));
    },
    setPostsCreated: (setCb) => {
      set((state) => ({
        postsCreated:
          typeof setCb === 'function' ? setCb(state.postsCreated ?? []) : setCb
      }));
    },
    setComments: (comments) => {
      set({ comments });
    }
  })
);

export default usePanelStore;
