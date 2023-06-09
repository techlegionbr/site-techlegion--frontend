import React, { type ComponentProps, forwardRef, useState, type ChangeEvent, type FocusEvent } from "react"

import * as S from "./styles"

interface TextareaProps extends ComponentProps<"textarea"> {
  label?: string,
  error?: boolean,
  helperText?: string,
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ className = "", id = "", onFocus, onBlur, onChange, value = "", label, error = false, helperText, ...restPropsTextarea }, ref) => {
  const [valueTextarea, setValueTextarea] = useState(value)
  const [isFocus, setIsFocus] = useState(false)

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
    <S.Textarea className={className} id={id} error={error} focus={isFocus}>
      {label && (<label>{label}</label>)}
      <div className="textarea-container">
        <textarea {...restPropsTextarea} ref={ref} value={valueTextarea} onChange={handleChangeTextarea} onFocus={handleFocusTextarea} onBlur={handleBlurTextarea} />
      </div>
      {helperText && (<p className="helper-text">{helperText}</p>)}
    </S.Textarea>
  )
})

Textarea.displayName = "Textarea"

export default Textarea