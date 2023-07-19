


import { useState } from "react"

import { color } from "@/styles/root"

import * as S from "./styles"

interface AlertNewEntitieFieldProps {
  label: string,
  value: string
}

const AlertNewEntitieField = ({ label, value }: AlertNewEntitieFieldProps): JSX.Element => {
  const [isCopy, setIsCopy] = useState(false)

  const handleCopyText = (): void => {

    navigator.clipboard.writeText(value)
      .then(() => {
        setIsCopy(true)
        setTimeout(() => {
          setIsCopy(false)
        }, 2000)
      }).catch((err) => {
        console.log(err)
      })
  }

  return (
    <S.AlertNewEntitieField>
      <span className="label">{label}</span>
      <span className="value-text">{value}</span>
      <button
        className="btn-copy"
        onClick={handleCopyText}
        style={{ backgroundColor: isCopy ? color.success : color.third }}
      >
        {
          isCopy ? (
            <>
              <span className="message-copy">{label.replace(":", "")} copiado!</span>
              <i className='bx bxs-check-circle' ></i>
            </>
          ) : (
            <i className='bx bxs-copy'></i>
          )
        }
      </button>
    </S.AlertNewEntitieField>
  )
}

export default AlertNewEntitieField