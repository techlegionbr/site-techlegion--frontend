import { presenceAnimation } from "@/animations/presence";
import { color, font } from "@/styles/root";
import styled from "styled-components";


interface IFormCheckboxesProps {
  error: boolean
}

export const FormCheckboxes = styled.div<IFormCheckboxesProps>`
&:hover > label{
  color:  ${({ error }) => error ? color.danger : color.light}
}
  label{
    font-weight: bold;
    font-size: ${font.size.xsm};
    margin-bottom: .3rem;
    display: inline-block;
    color: ${({ error }) => error ? color.danger : "#ffffffc3"} ;
    transition: .2s;
  }
  .options{
    display: flex;
    gap: .5rem;
    flex-wrap: wrap;
    li{
      cursor: pointer;
      padding: .5rem;
      border: 1.4px solid ${({ error }) => error ? color.danger : "#ffffff6d"} ;
      border-radius: .3rem;
      padding: .4rem .6rem;
      background-color: transparent;
      font-size: ${font.size.xsm};
      
      color: ${({ error }) => error ? color.danger : "#ffffffc3"};
      font-weight: bold;
      transition: .2s;
      &:hover{
        background-color: ${({ error }) => error ? color.danger : color.secondary};
        border-color: ${({ error }) => error ? color.danger : color.secondary};
        color: ${color.light}
      }
    }
    .selected-option{
      background-color: ${({ error }) => error ? color.danger : color.secondary};
      border-color: ${({ error }) => error ? color.danger : color.secondary};
      color: ${color.light};
      transition: .2s;
    }
  }
  .helper-text{
    margin-top: .4rem;
    font-size: .7rem;
    line-height: .8rem;
    color: ${color.danger};
    font-weight: bold;
    ${presenceAnimation({
  animation: "opacity",
  duration: .3
})};
  }

`