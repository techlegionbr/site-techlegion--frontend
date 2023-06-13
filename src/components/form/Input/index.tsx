
import { type MouseEventHandler, useState, type ChangeEvent, useEffect, forwardRef, type ComponentProps, type FocusEvent } from "react"


import * as S from "./styles"


interface InputProps extends ComponentProps<"input"> {
  placeholder: string,
  error?: boolean,
  helperText?: string,
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
  placeholder,
  error = false,
  helperText = "",
  type = "text",
  value = "",
  onChange,
  onBlur,
  className = "",
  autoComplete,
  ...restPropsInput
}, ref): JSX.Element => {

  const [isFocus, setIsFocus] = useState(false)
  const [typeInput, setTypeInput] = useState(type)
  const [valueInput, setValueInput] = useState(value)

  useEffect(() => {
    setValueInput(value)
  }, [value])

  const handleClickToggleType: MouseEventHandler<HTMLButtonElement> = (e): void => {
    e.preventDefault()
    setTypeInput(prevType => prevType === "text" ? "password" : "text");
    setIsFocus(true)
  }

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>): void => {
    if (onChange) { onChange(e) }
    setValueInput(e.target.value)
  }

  const handleBlurInput = (e: FocusEvent<HTMLInputElement, Element>): void => {
    if (onBlur) { onBlur(e) }
    setIsFocus(false)
  }


  return (
    <S.Input className={className} error={error} focus={isFocus}>
      <label>{placeholder}</label>
      <div className="input-container">
        <input
          type={typeInput}
          onFocus={() => { setIsFocus(true); }}
          onBlur={handleBlurInput}
          value={valueInput}
          onChange={handleChangeInput}
          ref={ref}
          autoComplete={type === "password" || error ? "off" : autoComplete}
          spellCheck
          {...restPropsInput}
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
      {helperText && (<p className="helper-text">{helperText}</p>)}
    </S.Input>
  )
})


Input.displayName = "Input"

export default Input