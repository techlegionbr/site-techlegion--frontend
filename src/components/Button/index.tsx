import { type MouseEventHandler } from "react"


import { useRouter } from "next/router"

import * as S from "./styles"
interface PropsButton {
  children: string,
  color?: "primary" | "secondary" | "third",
  iconLeft?: React.ReactNode,
  iconRight?: React.ReactNode,
  className?: string,
  hover?: "opacity" | "scale" | "transparent",
  size?: "small" | "medium" | "big",
  href?: string,
  onClick?: MouseEventHandler<HTMLButtonElement>,
  disabled?: boolean
}

const Button = ({
  children,
  color = "secondary",
  iconLeft,
  iconRight,
  className,
  hover = "opacity",
  size = "small",
  href,
  onClick,
  disabled = false
}: PropsButton): JSX.Element => {
  const router = useRouter()
  const handleClickButton: MouseEventHandler<HTMLButtonElement> = (e) => {
    if (typeof href === "string") {
      void router.push(href)
    }
    if (typeof onClick === "function") {
      onClick(e)
    }
  }
  return (
    <S.Button
      colorTheme={color}
      hover={hover}
      className={className}
      isDisabled={disabled}
      size={size}
      onClick={handleClickButton}
    >
      {iconLeft}{children}{iconRight}
    </S.Button>
  )
}

export default Button