import { useEffect } from "react"

import * as S from "./styles"

interface IAlertDefaultProps {
  show: boolean,
  helperText: {
    main: string,
    sup?: string
  }
  iconLeft?: React.ReactNode,
  onClose?: (() => Promise<void>) | (() => void);
}

const AlertDefault = ({ show, helperText, iconLeft, onClose }: IAlertDefaultProps): JSX.Element => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.document.body.classList[show ? "add" : "remove"]("overflow-hidden")
    }
  }, [show])

  return show ? (
    <S.AlertDefault>
      <div className="card">
        {iconLeft && iconLeft}
        <div className="helper-texts">
          {helperText.sup && (<small>{helperText.sup}</small>)}
          <p>{helperText.main}</p>
        </div>
        <button onClick={onClose} className="btn-close-alert"><i className='bx bx-x' ></i></button>
      </div>
    </S.AlertDefault>
  ) : <></>
}

export default AlertDefault