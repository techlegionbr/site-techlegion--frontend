import { presenceAnimation } from "@/animations/presence";
import { color, font } from "@/styles/root";
import styled from "styled-components";

import { type InputStyledProps } from "./types";
import { handlersConditionInput } from "./utils";



export const Input = styled.div<InputStyledProps>`
  width: 300px;
  label{
    display: inline-block;
    font-weight: bold;
    font-size: ${font.size.xsm};
    margin-bottom: .3rem;
    color: ${({ focus, error }) => handlersConditionInput.label(focus, error)};
    transition: .2s;
  }
  .input-container{
    width: 100%;
    height: 43px;
    position: relative;
    .toggle-type{
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 1rem;
      transition: .2s;
      color: ${({ focus, error }) => handlersConditionInput.bthToggleType(focus, error)}; 
    }
    input{
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: .3rem;
      padding: .6rem 1rem;
      background-color: transparent;
      border: 1.4px solid ${({ focus, error }) => handlersConditionInput.borderColor(focus, error)};
      color: ${({ focus, error }) => handlersConditionInput.color(focus, error)}; 
      font-size: ${font.size.xsm};
      transition: .2s;
      outline: none;
      &::placeholder{
        color: ${({ focus, error }) => handlersConditionInput.placeholderColor(focus, error)};
        font-weight: bold;
      }
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