import { color, screens } from "@/styles/root"
import styled from "styled-components"



interface PropsButtonStyled {
  colorTheme: "primary" | "secondary" | "third",
  hover: "opacity" | "scale" | "transparent",
  size: "small" | "medium" | "big",
  isDisabled: boolean
}

const fontSizes = {
  small: ".7rem",
  medium: ".9rem",
  big: "1rem"
}

const fontSizesResp = {
  small: ".7rem",
  medium: ".8rem",
  big: ".9rem"
}

const hovers = {
  opacity: "opacity: 1;",
  scale: "transform: scale(1.1); opacity: 1;",
  transparent: "background-color: transparent;"
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
  pointer-events: ${({ isDisabled }) => isDisabled ? "none" : "default"};
  font-size: ${({ size }) => fontSizes[size]};
  text-transform: uppercase;
  opacity: ${({ hover, isDisabled }) => isDisabled ? ".5" : hover === "opacity" || hover === "scale" ? ".8" : "1"} ;
  transition: .2s;
  border: 1.4px solid ${({ colorTheme }) => color[colorTheme]};
  @media (max-width: ${screens.sm}) {
    font-size: ${({ size }) => fontSizesResp[size]};
  }
  &:hover{
    ${({ hover, colorTheme }) => hovers[hover] === "transparent" ? `
    ${hovers[hover]}color: ${color[colorTheme]};` : hovers[hover]}
  }
  i{
    font-size: 1.1rem;
  }
`