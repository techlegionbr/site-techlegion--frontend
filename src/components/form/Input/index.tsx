
import { type MouseEventHandler, useState } from "react"

import * as S from "./styles"

type InputType = "text" | "password" | "email"

interface InputProps {
  className?: string,
  name: string,
  type?: InputType,
  placeholder: string,
  error?: boolean,
  helperText?: string
}

const Input = ({ className = "", name, placeholder, type = "text", error = false, helperText = "" }: InputProps): JSX.Element => {
  const [isFocus, setIsFocus] = useState(false)
  const [typeInput, setTypeInput] = useState<InputType>(type)

  const handleClickToggleType: MouseEventHandler<HTMLButtonElement> = (e): void => {
    e.preventDefault()
    setTypeInput(prevType => prevType === "text" ? "password" : "text");
  }
  return (
    <S.Input className={className} error={error} focus={isFocus}>
      <label>{placeholder}</label>
      <div className="input-container">
        <input
          type={typeInput}
          name={name}
          onFocus={() => { setIsFocus(true); }}
          onBlur={() => { setIsFocus(false); }}
        />
        {
          type === "password" && (
            <button
              className="toggle-type"
              onClick={handleClickToggleType}
            >
              {typeInput === "password" ? <i className='bx bxs-tired'></i> : <i className='bx bxs-shocked' ></i>}
            </button>
          )
        }
      </div>
      {
        helperText && (<small className="helper-text">Esse input é obrigatório.</small>)
      }
    </S.Input>
  )
}

export default Input