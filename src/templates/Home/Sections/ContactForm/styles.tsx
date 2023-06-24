import { color, layout } from "@/styles/root";
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
    .form-contact{
      margin-top: 4rem;
    }
  }
`