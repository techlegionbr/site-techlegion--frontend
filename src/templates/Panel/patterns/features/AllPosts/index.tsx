
import { useEffect } from "react"


import useAllPostsPublicQuery from "@/queries/post/useAllPostsPublicQuery"
import usePanelStore from "@/stores/usePanelStore"

import CardFeatureStyled from "../../styles/CardFeature"
import * as S from "./styles"

const AllPosts = ({ order = 0 }: { order?: number }): JSX.Element => {
  const allPosts = usePanelStore(state => state.allPosts)
  const { isLoading: isLoadingFetchAllEditors, isError: isErrorFetchAllEditors } = useAllPostsPublicQuery()

  useEffect(() => {
    console.log(allPosts)
  }, [allPosts])
  return (
    <CardFeatureStyled order={order}>
      <S.AllPosts>
        <h4>Todos os posts</h4>
      </S.AllPosts>
    </CardFeatureStyled>
  )
}

export default AllPosts