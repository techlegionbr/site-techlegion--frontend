import { useEffect } from "react"

import * as S from "../styles"

interface PropsPopUp {
  show: boolean
}

const PopUpSearch = ({ show }: PropsPopUp): JSX.Element => {
  useEffect(() => {
    document.body.classList[show ? "add" : "remove"]("overflow-hidden")
  }, [show])
  return show ? (
    <S.PopUpSearch>

    </S.PopUpSearch>
  ) : <></>
}


export default PopUpSearch