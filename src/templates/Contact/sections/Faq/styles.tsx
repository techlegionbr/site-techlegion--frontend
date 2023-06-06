import { color, layout } from "@/styles/root";
import styled from "styled-components";


export const Faq = styled.div`
  width: 100%;
  padding: 100px ${layout.containerPaddingX};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${color.bluishGray};
  .content{
    width: ${layout.contentWidth};
    .comon-questions{
      width: 100%;
      display: grid;
      margin-top: 3rem;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1rem;
      .question{
        background-color: #161630;
        padding: 1.4rem 1.5rem;
        border-radius: .6rem;
        border: 1.2px solid #516d9329;
        h4{
          color: ${color.third}
        }
        p{
          margin-top: .5rem;
        }
      }
    }
  }
`