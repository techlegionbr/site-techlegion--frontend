import { color, font } from "@/styles/root";
import styled from "styled-components";


interface InputProps {
  error: boolean,
  focus: boolean
}

export const Input = styled.div<InputProps>`
  width: 300px;
  label{
    font-weight: bold;
    font-size: ${font.size.xsm};
    color: ${({ focus, error }) => (
    focus && !error ? "#fff" :
      error ? color.danger : "#ffffffc3"
  )};
    transition: .2s;
  }
  .input-container{
    width: 100%;
    position: relative;
    .toggle-type{
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 1rem;
    }
    input{
      margin-top: .3rem;
      display: block;
      width: 100%;
      border-radius: .3rem;
      padding: .6rem 1rem;
      background-color: transparent;
      border: 1.4px solid ${({ focus, error }) => (
    focus && !error ? "#ffffffc2" :
      error ? color.danger : "#ffffff6d"
  )};
      color: ${({ error }) => (
    error ? color.danger : "#fff"
  )}; 
      font-size: ${font.size.xsm};
      transition: .2s;
      outline: none;
    }
  }
  
  .helper-text{
    font-size: .7rem;
    line-height: .8rem;
    color: ${color.danger};
    font-weight: bold;
  }
`