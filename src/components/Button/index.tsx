import { type MouseEventHandler } from "react"

import styled from "styled-components"
import { color } from "@/styles/root"

import { useRouter } from "next/router"

interface PropsButtonStyled {
  colorTheme: "primary" | "secondary" | "third",
  hover: "opacity" | "scale" | "transparent",
  size: "small" | "medium" | "big"
}

const ButtonStyled = styled.button<PropsButtonStyled>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;
  background-color: ${({ colorTheme }) => color[colorTheme]};
  text-transform: uppercase;
  padding: .5rem 1.3rem;
  border-radius: .4rem;
  font-weight: bold;
  font-size: ${({ size }) => (
    size === "small" ? ".8rem" :
      size === "medium" ? ".9rem" :
        size === "big" ? "1rem" : ""
  )};
  opacity: ${({ hover }) => hover === "opacity" || hover === "scale" ? ".8" : "1"} ;
  transition: .2s;
  border: 1.4px solid ${({ colorTheme }) => color[colorTheme]};
  &:hover{
    ${({ hover, colorTheme }) => (
    hover === "opacity" ? "opacity: 1" :
      hover === "scale" ? "transform: scale(1.1); opacity: 1;" :
        hover === "transparent" ? `
      background: transparent;
      color: ${color[colorTheme]};
      ` : ""
  )}
  }
`

interface PropsButton {
  children: string,
  color?: "primary" | "secondary" | "third",
  iconLeft?: React.ReactNode,
  iconRight?: React.ReactNode,
  className?: string,
  hover?: "opacity" | "scale" | "transparent",
  size?: "small" | "medium" | "big",
  href?: string,
  onClick?: MouseEventHandler<HTMLButtonElement>
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
  onClick
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
    <ButtonStyled
      colorTheme={color}
      hover={hover}
      className={className}
      size={size}
      onClick={handleClickButton}
    >
      {iconLeft}{children}{iconRight}
    </ButtonStyled>
  )
}

export default Button