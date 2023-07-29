import { presenceAnimation } from "@/animations/presence";
import { color } from "@/styles/root";
import styled from "styled-components";


export const TextEditor = styled.div`
  width: 100%;
  .text-editor{
    min-height: 400px;
    resize: vertical;
    background: #fff;
    color: #000;
    padding: 1rem;
    border-radius: .5rem;
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
  .rdw-dropdown-selectedtext{
    color: #000;
  }
  .rdw-link-decorator-wrapper a{
    color: blue;
    text-decoration: underline;
    cursor: pointer;
  }
  .rdw-dropdown-optionwrapper{
    z-index: 2;
  }
`