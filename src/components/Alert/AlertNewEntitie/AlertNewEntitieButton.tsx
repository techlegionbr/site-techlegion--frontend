


import * as S from "./styles"

interface AlertNewEntitieButtonProps {
  label: string,
  onAction?: () => void
}

const AlertNewEntitieButton = ({ label, onAction }: AlertNewEntitieButtonProps): JSX.Element => {
  return (
    <S.AlertNewEntitieButton>
      <button onClick={onAction}>
        {label}
      </button>
    </S.AlertNewEntitieButton>
  )
}

export default AlertNewEntitieButton