import { useEffect, type ReactNode } from "react"

import * as S from "./styles"

interface AlertNewEntitieRootProps {
  children: ReactNode,
  show: boolean
}

const AlertNewEntitieRoot = ({ children, show }: AlertNewEntitieRootProps): JSX.Element => {
  useEffect(() => {
    window.document.body.classList[show ? "add" : "remove"]("overflow-hidden")
  }, [show])
  return show ? (
    <S.AlertNewEntitieRoot>
      <div className="card">
        {children}
      </div>
    </S.AlertNewEntitieRoot>
  ) : <></>
}

export default AlertNewEntitieRoot