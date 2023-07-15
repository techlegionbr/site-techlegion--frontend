import { color } from "@/styles/root";
import { type TModeTheme } from "@/styles/types";
import styled from "styled-components";


export const Accordions = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

interface PropsAccordion {
  show: boolean,
  modeTheme: TModeTheme
}

export const Accordion = styled.li<PropsAccordion>`
  width: 100%;
  background-color: ${({ modeTheme }) => modeTheme === "bluishGray" ? "#111a37" : "#171757"};
  cursor: pointer;
  border-radius: .5rem;
  border: 1.2px solid #8594f547;
  .question{
    width: 100%;
    height: 80px;
    padding: 1rem;
    display: flex;
    align-items: center;
    position: relative;
    padding-right: 3rem;
    opacity: ${({ show }) => show ? "1" : ".8"};
    transition: .2s;
    .arrow-icon{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      position: absolute;
      right: 1rem;
      top: 0;
      bottom: 0;
      margin: auto;
      border-radius: 50%;
      color: ${color.third};
      transform: rotate(${({ show }) => show ? "180deg" : "0deg"});
      transition: .2s;
      font-size: 1.2rem;
    }
    p{
      user-select: none;
    }
  }
  .response{
    width: 100%;
    padding: 0 1rem;
    overflow: hidden;
    height: ${({ show }) => show ? "200px" : "0px"};
    transition: .2s;
    p{
      white-space: break-spaces;
    }
  }
`