import { useState, type ReactNode, useRef, useEffect } from "react"

import * as S from "./styles"

interface ITitleItemProps {
  children: ReactNode,
  title?: string,
  show?: boolean
}

const TitleItem = ({ children, title, show = true }: ITitleItemProps): JSX.Element => {
  const [showSubTitle, setShowSubTitle] = useState(false)
  const titleItemRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const { current: titleItem } = titleItemRef
    if (showSubTitle && titleItem && typeof window !== "undefined") {
      const handleClickInWindow = (ev: MouseEvent): void => {
        if (!titleItem.contains(ev.target as Node)) {
          setShowSubTitle(false)
        }
      }
      window.document.addEventListener("click", handleClickInWindow)
      return () => { window.document.removeEventListener("click", handleClickInWindow); }
    }
  }, [showSubTitle])

  const handleMouseEnter = (): void => {
    setShowSubTitle(true)
  }
  const handleMouseLeave = (): void => {
    setShowSubTitle(false)
  }

  const handleClick = (): void => {
    setShowSubTitle(false)
  }

  return (
    <S.TitleItem ref={titleItemRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}>
      {children}
      {title && showSubTitle && show ? <S.SubTitle>{title}</S.SubTitle> : <></>}
    </S.TitleItem>
  )
}

export default TitleItem