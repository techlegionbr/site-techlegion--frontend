
import { type MouseEventHandler, useState, useEffect, forwardRef, type ComponentProps, type FocusEvent, type ChangeEventHandler } from "react"


import * as S from "./styles"
import maskInput from "./utils/maskInput"


interface FormInputProps extends ComponentProps<"input"> {
  label?: string,
  error?: boolean,
  helperText?: string,
  mask?: string
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(({
  label,
  error = false,
  helperText,
  type = "text",
  value = "",
  onChange,
  onBlur,
  onFocus,
  className,
  autoComplete,
  id,
  mask,
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

  const handleChangeInput: ChangeEventHandler<HTMLInputElement> = (e): void => {
    if (mask) { maskInput(e, mask) }
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
    <S.FormInput className={className} id={id} error={error} focus={isFocus}>
      {label && <label>{label}</label>}
      <div className="input-container">
        <input
          ref={ref}
          type={type === "password" ? typeInput : type}
          onFocus={handleFocusInput}
          onBlur={handleBlurInput}
          value={valueInput}
          onChange={handleChangeInput}
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
    </S.FormInput>
  )
})


FormInput.displayName = "Input"

export default FormInput