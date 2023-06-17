import { color, screens } from "@/styles/root"
import styled from "styled-components"



interface PropsButtonStyled {
  colorTheme: "primary" | "secondary" | "third",
  hover: "opacity" | "scale" | "transparent",
  size: "small" | "medium" | "big"
}

export const Button = styled.button<PropsButtonStyled>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;
  background-color: ${({ colorTheme }) => color[colorTheme]};
  padding: .5rem 1.3rem;
  border-radius: .4rem;
  font-weight: bold;
  font-size: ${({ size }) => (
    size === "small" ? ".7rem" :
      size === "medium" ? ".9rem" :
        size === "big" ? "1rem" : ""
  )};
  opacity: ${({ hover }) => hover === "opacity" || hover === "scale" ? ".8" : "1"} ;
  transition: .2s;
  border: 1.4px solid ${({ colorTheme }) => color[colorTheme]};
  @media (max-width: ${screens.sm}) {
    font-size: ${({ size }) => (
    size === "small" ? ".7rem" :
      size === "medium" ? ".8rem" :
        size === "big" ? ".9rem" : ""
  )};
  }
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