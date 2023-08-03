
import CardFeatureStyled from "../../styles/CardFeature"
import * as S from "./styles"

const AllManagers = ({ order = 0 }: { order?: number }): JSX.Element => {
  return (
    <CardFeatureStyled order={order}>
      <S.AllManagers>
        <h4>Todos os gestores <span>| 03</span></h4>
      </S.AllManagers>
    </CardFeatureStyled>
  )
}

export default AllManagers