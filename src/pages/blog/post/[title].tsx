
import { postService } from "@/services/api/postService"
import PostTemplate from "@/templates/PostTemplate"
import { type IPostPublic } from "@/types/IPost"


import { type GetStaticPaths, type GetStaticProps } from "next"

interface IPostProps {
  post: IPostPublic
}

const Post = ({ post }: IPostProps): JSX.Element => {

  return <PostTemplate post={post} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { posts } = await postService.getAllPosts.public()
  const paths = posts?.map(post => ({
    params: { title: post.route.name }
  })) ?? []

  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps<IPostProps, { title: string }> = async ({ params }) => {
  if (!params || typeof params.title !== 'string') {
    return {
      notFound: true,
    };

  }
  const { post } = await postService.getPost.public(params.title)
  if (!post) {
    return {
      notFound: true
    }
  }

  return { props: { post } };
};

export default Post