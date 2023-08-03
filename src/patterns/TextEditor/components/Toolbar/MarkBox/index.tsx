/* eslint-disable react-hooks/exhaustive-deps */
import { useState, type MouseEventHandler, type ReactNode, useEffect, useCallback } from "react"

import TitleItem from "@/components/TitleItem"

import * as S from "./styles"

interface IMarkBoxProps {
  icon: ReactNode,
  onChange?: (mark: boolean) => void,
  marked?: boolean,
  title?: string
}

const MarkBox = ({ icon, onChange, marked = false, title }: IMarkBoxProps): JSX.Element => {
  const [selected, setSelected] = useState(marked)

  useEffect(() => {
    setSelected(marked)
  }, [marked])

  const handleClickBox: MouseEventHandler<HTMLButtonElement> = useCallback((ev) => {
    ev.preventDefault()
    setSelected(prevSel => {
      const newSelected = !prevSel
      if (onChange) {
        onChange(newSelected)
      }
      return newSelected
    })
  }, [onChange])
  return (
    <TitleItem title={title}>
      <S.MarkBox onClick={handleClickBox} selected={selected}>
        {icon}
      </S.MarkBox>
    </TitleItem>

  )
}

export default MarkBox