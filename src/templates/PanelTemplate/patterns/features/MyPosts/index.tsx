

import CardFeatureStyled from "../../styles/CardFeature"
import * as S from "./styles"


const MyPosts = ({ order = 0 }: { order?: number }): JSX.Element => {
  return (
    <CardFeatureStyled order={order}>
      <S.ListPosts>
        <h4>Meus posts <span> | 03</span></h4>

      </S.ListPosts>
    </CardFeatureStyled>
  )
}

export default MyPosts