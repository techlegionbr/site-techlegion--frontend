import createPostService from './createPostService';
import getAllPostsPrivateService from './getAllPostsPrivateService';
import getAllPostsPublicService from './getAllPostsPublicService';
import getPostPrivateService from './getPostPrivateService';
import getPostPublicService from './getPostPublicService';

export const postService = {
  createPost: createPostService,
  getAllPosts: {
    private: getAllPostsPrivateService,
    public: getAllPostsPublicService
  },
  getPost: {
    private: getPostPrivateService,
    public: getPostPublicService
  }
};
