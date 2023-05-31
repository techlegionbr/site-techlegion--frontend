import { color, layout } from "@/styles/root";
import styled from "styled-components";


export const YourMoment = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px ${layout.containerPaddingX};
  background-color: ${color.primary};
  .content{
    width: ${layout.contentWidth};
    .description-contact{
      margin-top: 2.5rem;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      h4{
        background-color: #1c1a54;
        padding: .6rem 1rem;
        border-radius: .4rem;
        border: 1.3px solid #72b1ff72;
        color: #ffffffce;
      }
      p{
        margin-top: 1rem;
        max-width: 500px;

      }
    }
    .button-contact{
      margin-top: 3rem;
    }
  }
`