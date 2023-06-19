import { presenceAnimation } from "@/animations/presence";
import { color, font } from "@/styles/root";
import styled from "styled-components";


interface InputProps {
  error: boolean,
  focus: boolean
}

export const Input = styled.div<InputProps>`
  width: 300px;
  label{
    display: inline-block;
    font-weight: bold;
    font-size: ${font.size.xsm};
    margin-bottom: .3rem;
    color: ${({ focus, error }) => (
    focus && !error ? "#fff" :
      error ? color.danger : "#ffffffc3"
  )};
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
      color: ${({ error, focus }) => (
    error ? color.danger :
      focus ? "#fff" : "#ffffffc3"
  )}; 
    }
    input{
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: .3rem;
      padding: .6rem 1rem;
      background-color: transparent;
      border: 1.4px solid ${({ focus, error }) => (
    focus && !error ? "#ffffffc2" :
      error ? color.danger : "#ffffff6d"
  )};
      color: ${({ error, focus }) => (
    error ? color.danger :
      focus ? "#fff" : "#ffffffc3"
  )}; 
      font-size: ${font.size.xsm};
      transition: .2s;
      outline: none;
      &::placeholder{
        color: ${({ error }) => error ? color.danger : "#ffffff8b"};
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