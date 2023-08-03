import { color } from "@/styles/root";
import styled from "styled-components";


interface IMarkBoxProp {
  selected: boolean
}

export const MarkBox = styled.button<IMarkBoxProp>`
flex: none;
  width: 35px;
  height: 35px;
  border-radius: .2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ selected }) => selected ? color.secondary : "inherit"};
  background-color: ${({ selected }) => selected ? "#6969f013" : "transparent"};
  &:hover{
      background-color: ${({ selected }) => selected ? "none" : "#f1f1f1"};
    }
  i{
    font-size: 1.4rem;
  }

`