
import CardFeatureStyled from "../../styles/CardFeature"
import * as S from "./styles"

const AllPosts = ({ order = 0 }: { order?: number }): JSX.Element => {
  return (
    <CardFeatureStyled order={order}>
      <S.AllPosts>
        <h4>Todos os posts</h4>
      </S.AllPosts>
    </CardFeatureStyled>
  )
}

export default AllPosts