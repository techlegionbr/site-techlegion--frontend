import CardFeatureStyled from "../../styles/CardFeature"
import * as S from "./styles"

const MyManagers = ({ order = 0 }: { order?: number }): JSX.Element => {
  return (
    <CardFeatureStyled order={order}>
      <S.MyManagers>
        <h4>Gestores adicionados por você <span>| 03</span></h4>
      </S.MyManagers>
    </CardFeatureStyled>
  )
}

export default MyManagers