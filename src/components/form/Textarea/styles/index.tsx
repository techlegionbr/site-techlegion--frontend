import { presenceAnimation } from "@/animations/presence";
import { color, font } from "@/styles/root";
import styled from "styled-components";

import { type ITextareaStyledProps } from "./types";
import { handlersConditionTextarea } from "./utils";



export const Textarea = styled.div<ITextareaStyledProps>`
  width: 300px;
  label{
    display: inline-block;
    font-weight: bold;
    font-size: ${font.size.xsm};
    color: ${({ focus, error }) => handlersConditionTextarea.label(focus, error)};
    transition: .2s;
    margin-bottom: .3rem;
  }
  .textarea-container{
    width: 100%;
    height: 180px;
    position: relative;
    textarea{
      position: absolute;
      resize: vertical;
      height: 100%;
      width: 100%;
      border-radius: .3rem;
      padding: .6rem 1rem;
      background-color: transparent;
      border: 1.4px solid ${({ focus, error }) => handlersConditionTextarea.borderColor(focus, error)};
      color: ${({ focus, error }) => handlersConditionTextarea.color(focus, error)}; 
      font-size: ${font.size.xsm};
      transition: .2s;
      outline: none;
      &::placeholder{
        color: ${({ focus, error }) => handlersConditionTextarea.placeholderColor(focus, error)};
        font-weight: bold;
        transition: .2s;
      }
    }
  }
  .helper-text{
    margin-top: calc(.4rem - 4px);
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