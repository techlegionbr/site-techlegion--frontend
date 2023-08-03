import { type ReactNode, type ComponentProps, type MouseEventHandler } from "react"

import TitleItem from "@/components/TitleItem"

import * as S from "./styles"

interface IButtonBoxProps extends ComponentProps<"button"> {
  icon: ReactNode,
  title?: string
}

const ButtonBox = ({ icon, title, onClick, ...restProps }: IButtonBoxProps): JSX.Element => {

  const handleClick: MouseEventHandler<HTMLButtonElement> = (ev) => {
    ev.preventDefault()
    if (onClick) {
      onClick(ev)
    }
  }

  return (
    <TitleItem title={title}>
      <S.ButtonBox {...restProps} onClick={handleClick} ref={undefined}>
        {icon}
      </S.ButtonBox>
    </TitleItem>

  )
}

export default ButtonBox