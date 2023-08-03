import { presenceAnimation } from "@/animations/presence";
import { color } from "@/styles/root";
import styled from "styled-components";


export const TextEditor = styled.div`
  width: 100%;



  .pejurative-size-of-p-toolbar-text-editor {
    font-size: .9rem;
  }
  .pejurative-size-of-h1-toolbar-text-editor {
    font-size: 1.4rem;
    font-weight: bold;
  }
  .pejurative-size-of-h2-toolbar-text-editor{
    font-size: 1.2rem;
    font-weight: bold;
  }
  .pejurative-size-of-h3-toolbar-text-editor{
    font-size: 1rem;
    font-weight: bold;
  }



  .text-editor{
    width: 100%;
    height: 500px;
    resize: vertical;
    background: #fff;
    color: #000;
    padding: 1rem;
    border-radius: .5rem;
    overflow: auto;
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