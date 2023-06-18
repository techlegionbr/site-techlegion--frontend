import { useEffect } from "react"

import * as S from "./styles"

interface IAlertProps {
  show: boolean,
  helperText: {
    main: string,
    sup: string
  }
  iconLeft: React.ReactNode,
  onClose: () => void
}

const Alert = ({ show, helperText, iconLeft, onClose }: IAlertProps): JSX.Element => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.document.body.classList[show ? "add" : "remove"]("overflow-hidden")
    }
  }, [show])
  return show ? (
    <S.Alert>
      <div className="card">
        {iconLeft}
        <div className="helper-texts">
          <small>{helperText.sup}</small>
          <p>{helperText.main}</p>
        </div>
        <button onClick={onClose} className="btn-close-alert"><i className='bx bx-x' ></i></button>
      </div>
    </S.Alert>
  ) : <></>
}

export default Alert