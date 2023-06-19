import { presenceAnimation } from "@/animations/presence";
import { color, font } from "@/styles/root";
import styled from "styled-components";

import { type ITextareaStyledProps } from "./types";




const handlersCondition = {
  label: (focus: boolean, error: boolean) => (
    focus && !error ? color.light :
      error ? color.danger :
        "#ffffffc3"
  ),
  colorBorderTextarea: (focus: boolean, error: boolean) => (
    focus && !error ? "#ffffffc2" :
      error ? color.danger : "#ffffff6d"
  ),
  colorTextarea: (focus: boolean, error: boolean) => (
    error ? color.danger :
      focus ? color.light :
        "#ffffffc3"
  ),
  colorPlaceholderTextarea: (error: boolean) => (
    error ? color.danger :
      "#ffffff8b"
  )
}

export const Textarea = styled.div<ITextareaStyledProps>`
  width: 300px;
  label{
    display: inline-block;
    font-weight: bold;
    font-size: ${font.size.xsm};
    color: ${({ focus, error }) => handlersCondition.label(focus, error)};
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
      border: 1.4px solid ${({ focus, error }) => handlersCondition.colorBorderTextarea(focus, error)};
      color: ${({ focus, error }) => handlersCondition.colorTextarea(focus, error)}; 
      font-size: ${font.size.xsm};
      transition: .2s;
      outline: none;
      &::placeholder{
        color: ${({ error }) => handlersCondition.colorPlaceholderTextarea(error)};
        font-weight: bold;
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