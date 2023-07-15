import { useEffect } from "react"

import * as S from "./styles"

interface IAlertDefaultProps {
  show: boolean,
  helperText: {
    main: string,
    sup: string
  }
  iconLeft: React.ReactNode,
  onClose: (() => Promise<void>) | (() => void);
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
        {iconLeft}
        <div className="helper-texts">
          <small>{helperText.sup}</small>
          <p>{helperText.main}</p>
        </div>
        <button onClick={() => { void onClose(); }} className="btn-close-AlertDefault"><i className='bx bx-x' ></i></button>
      </div>
    </S.AlertDefault>
  ) : <></>
}

export default AlertDefault