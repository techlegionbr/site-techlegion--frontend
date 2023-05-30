import { breackScreens, color, layout } from "@/styles/root";
import styled from "styled-components";


export const ContactForm = styled.div`
  width: 100%;
  padding: 100px ${layout.containerPaddingX};
  background: ${color.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  .content{
    width: ${layout.contentWidth};
    form{
      width: 100%;
      display: grid;
      grid-template-areas: "input-name input-email" "textarea textarea";
      gap: .5rem;
      margin-top: 4rem;
      @media (max-width: ${breackScreens.tablet}) {
        grid-template-areas: "input-name" "input-email" "textarea";
      }
      #name{
        grid-area: input-name;
      }
      #email{
        grid-area: input-email;
      }
      #message{
        grid-area: textarea;
      }
      input, textarea{
        padding: .5rem 1rem;
        outline: none;
        resize: none;
        border-radius: .4rem;
      }
      textarea{
        height: 140px;
      }
      .button-submit{
        width: 100px;
        background-color: ${color.secondary};
        text-align: center;
        padding: .5rem 0;
        border-radius: .4rem;
        text-transform: uppercase;
        font-weight: bold;
        font-size: .8rem;
      }
    }
  }
`