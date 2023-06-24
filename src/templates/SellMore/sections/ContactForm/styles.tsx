import { layout } from "@/styles/root";
import styled from "styled-components";


export const ContactForm = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 100px ${layout.containerPaddingX};
  .content{
    width: ${layout.contentWidth};
    .form-contact{
      margin-top: 4rem;
    }
  }
`