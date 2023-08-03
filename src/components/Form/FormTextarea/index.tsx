import React, { type ComponentProps, forwardRef, useState, type ChangeEvent, type FocusEvent, useEffect } from "react"

import * as S from "./styles"

interface IFormTextareaProps extends ComponentProps<"textarea"> {
  label?: string,
  error?: boolean,
  helperText?: string,
}

const FormTextarea = forwardRef<HTMLTextAreaElement, IFormTextareaProps>(({ className = "", id = "", onFocus, onBlur, onChange, value = "", label, error = false, helperText, ...restPropsTextarea }, ref) => {
  const [valueTextarea, setValueTextarea] = useState(value)
  const [isFocus, setIsFocus] = useState(false)

  useEffect(() => {
    setValueTextarea(value)
  }, [value])

  const handleChangeTextarea = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    if (onChange) {
      onChange(e)
    }
    setValueTextarea(e.target.value)
  }

  const handleBlurTextarea = (e: FocusEvent<HTMLTextAreaElement>): void => {
    if (onBlur) { onBlur(e) }
    setIsFocus(false)
  }

  const handleFocusTextarea = (e: FocusEvent<HTMLTextAreaElement>): void => {
    if (onFocus) { onFocus(e) }
    setIsFocus(true)
  }

  return (
    <S.FormTextarea className={className} id={id} error={error} focus={isFocus}>
      {label && (<label>{label}</label>)}
      <div className="textarea-container">
        <textarea ref={ref} value={valueTextarea} onChange={handleChangeTextarea} onFocus={handleFocusTextarea} onBlur={handleBlurTextarea} {...restPropsTextarea} />
      </div>
      {helperText && (<p className="helper-text">{helperText}</p>)}
    </S.FormTextarea>
  )
})

FormTextarea.displayName = "Textarea"

export default FormTextarea