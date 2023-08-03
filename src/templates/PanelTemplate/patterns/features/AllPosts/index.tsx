
import { useEffect } from "react"


import useAllPostsPublicQuery from "@/queries/post/useAllPostsPublicQuery"
import usePanelStore from "@/stores/usePanelStore"

import InputSearch from "../../components/InputSearch"
import PostPreview from "../../components/PostPreview"
import CardFeatureStyled from "../../styles/CardFeature"
import * as S from "./styles"

const AllPosts = ({ order = 0 }: { order?: number }): JSX.Element => {
  const allPosts = usePanelStore(state => state.allPosts)
  const { isLoading: isLoadingFetchAllEditors, isError: isErrorFetchAllEditors } = useAllPostsPublicQuery()

  return (
    <CardFeatureStyled order={order}>
      <S.AllPosts>
        <h4>Todos os posts</h4>
        <InputSearch />
        <ul className="posts-list">
          {
            allPosts?.map(post => (
              <PostPreview key={post._id} className="post-preview" post={{
                nameRoute: post.route.name,
                title: post.head.title,
                description: post.head.description,
                comments: post.comments.length,
                deslikes: post.dislikes.length,
                likes: post.likes.length,
                shares: post.shares.length,
                profileEditor: post.profileEditor
              }} />
            ))
          }

        </ul>
      </S.AllPosts>
    </CardFeatureStyled>
  )
}

export default AllPosts