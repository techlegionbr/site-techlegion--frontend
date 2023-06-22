
import CardFeatureStyled from "../../styles/CardFeature"
import * as S from "./styles"

const AllEditors = ({ order = 0 }: { order?: number }): JSX.Element => {
  return (
    <CardFeatureStyled order={order}>
      <S.AllEditors>
        <h4>Todos os redatores <span>| 03</span></h4>
      </S.AllEditors>
    </CardFeatureStyled>
  )
}

export default AllEditors