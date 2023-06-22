import CardFeatureStyled from "../../styles/CardFeature"
import * as S from "./styles"

const MyEditors = ({ order = 0 }: { order?: number }): JSX.Element => {
  return (
    <CardFeatureStyled order={order}>
      <S.MyEditors>
        <h4>Redatores adicionados por você <span>| 03</span></h4>
      </S.MyEditors>
    </CardFeatureStyled>
  )
}

export default MyEditors