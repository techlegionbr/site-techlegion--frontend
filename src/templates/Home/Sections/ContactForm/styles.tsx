import { screens, color, layout } from "@/styles/root";
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
      grid-template-areas: "input-name input-email" "textarea-message textarea-message";
      gap: 1rem;
      margin-top: 4rem;
      grid-template-columns: .5fr .5fr;
      @media (max-width: ${screens.md}) {
        grid-template-areas: "input-name" "input-email" "textarea-message";
      }
        #input-name{
          grid-area: input-name;
        }
        #input-email{
          grid-area: input-email;
        }
        #textarea-message{

          grid-area: textarea-message;
        }
      .input-contact{
        width: 100%;
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