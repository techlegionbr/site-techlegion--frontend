import { useEffect, useState } from "react"

import * as S from "./styles"

interface IOptionBox {
  value: string,
  label: string
}

interface IFormCheckboxesProps {
  label?: string,
  options: IOptionBox[],
  onChange?: (values: string[]) => void,
  id?: string,
  className?: string,
  defaultValues?: string[],
  helperText?: string,
  error?: boolean
}

const FormCheckboxes = ({ label, options, onChange, id, className, defaultValues, helperText, error = false }: IFormCheckboxesProps): JSX.Element => {
  const optionsInActiveState = Object.fromEntries(options.map(option => defaultValues?.includes(option.value) ? [option.value, true] : [option.value, false]))

  const [optionsStatus, setOptionsStatus] = useState<Record<string, boolean>>(optionsInActiveState)


  useEffect(() => {
    if (onChange) {
      const valueTrated = Object.entries(optionsStatus)
        .filter(([, isSelected]) => isSelected)
        .map(([valueOption]) => valueOption)

      onChange(valueTrated)
    }
  }, [optionsStatus, onChange])

  // const handleClickBox = (value: string): void => {
  //   setOptionsStatus(prevOptionsStatus => {
  //     const optionsUpdated = {
  //       ...prevOptionsStatus,
  //       [value]: !prevOptionsStatus[value]
  //     }
  //     if (onChange) {
  //       const valueTrated = Object.entries(optionsUpdated)
  //         .filter(([, isSelected]) => isSelected)
  //         .map(([valueOption]) => valueOption)

  //       onChange(valueTrated)
  //     }
  //     return optionsUpdated
  //   })
  // }


  return (
    <S.FormCheckboxes className={className} id={id} error={error}>
      {label && (<label>{label}</label>)}
      <ul className="options">
        {
          options.map(option => (
            <li
              key={option.value}
              className={optionsStatus[option.value] ? "selected-option" : ""}
              onClick={() => {
                setOptionsStatus(prevOptionsStatus => ({
                  ...prevOptionsStatus,
                  [option.value]: !prevOptionsStatus[option.value]
                }))
              }}
            >{option.label}</li>
          ))
        }
      </ul>
      {helperText && <p className="helper-text">{helperText}</p>}
    </S.FormCheckboxes>
  )
}

export default FormCheckboxes