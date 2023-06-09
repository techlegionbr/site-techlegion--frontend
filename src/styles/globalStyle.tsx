// NÃO ESTÁ FUNCIONANDO NO NEXT.JS DESATIVAR NÃO PRODUÇÃO

import { createGlobalStyle } from "styled-components"

import { screens, color, font } from "./root"

const GlobalStyle = createGlobalStyle`  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${font.family.Poppins};
  }
  body{
    color: ${color.light};
    background-color: ${color.primary};
  }
  ul{
    list-style: none;
  }

  a{
    text-decoration: none;
    color: ${color.light};
  }

  button{
    all: unset;
    cursor: pointer;
  }
  h3{
      font-size: ${font.size.sm};
      line-height: ${font.line_height.sm};
      @media (max-width: ${screens.sm}) {
        font-size: ${font.size.xsm};
        line-height: ${font.line_height.xsm};
      }
  }
  h2{
    font-size: ${font.size.md};
    line-height: ${font.line_height.md};
    @media (max-width: ${screens.sm}) {
      font-size: 1.3rem;
      line-height: 1.4rem;
    }
  }
  h1{
    font-size: ${font.size.lg};
    line-height: ${font.line_height.lg};
    @media (max-width: ${screens.sm}) {
      font-size: 2.5rem;
      line-height: 2.6rem;
    }
  }
  p{
    font-size: 1rem;
    line-height: 1.1rem;
    font-family: ${font.family.OpenSans};
    @media (max-width: ${screens.sm}) {
      font-size: .8rem;
      line-height: .9rem;
    }
  }

`
export default GlobalStyle