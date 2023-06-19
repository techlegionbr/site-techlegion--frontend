
import { type MouseEventHandler, useState, type ChangeEvent, useEffect, forwardRef, type ComponentProps, type FocusEvent } from "react"


import * as S from "./styles"


interface InputProps extends ComponentProps<"input"> {
  label?: string,
  error?: boolean,
  helperText?: string,
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  error = false,
  helperText = "",
  type = "text",
  value = "",
  onChange,
  onBlur,
  onFocus,
  className = "",
  autoComplete,
  id = "",
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
  }

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>): void => {
    if (onChange) { onChange(e) }
    setValueInput(e.target.value)
  }

  const handleBlurInput = (e: FocusEvent<HTMLInputElement>): void => {
    if (onBlur) { onBlur(e) }
    setIsFocus(false)
  }

  const handleFocusInput = (e: FocusEvent<HTMLInputElement>): void => {
    if (onFocus) { onFocus(e) }
    setIsFocus(true)
  }

  return (
    <S.Input className={className} id={id} error={error} focus={isFocus}>
      {label && <label>{label}</label>}
      <div className="input-container">
        <input
          type={typeInput}
          onFocus={handleFocusInput}
          onBlur={handleBlurInput}
          value={valueInput}
          onChange={handleChangeInput}
          ref={ref}
          autoComplete={type === "password" || error ? "off" : autoComplete}
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