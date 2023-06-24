import { screens } from '@/styles/root';
import styled from 'styled-components';

export const FormContact = styled.form`
  width: 100%;
  display: grid;
  grid-template-areas: 'input-name input-email' 'input-whatsapp input-whatsapp' 'textarea-message textarea-message' "btn-form btn-form";
  gap: 0.5rem;
  grid-template-columns: 0.5fr 0.5fr;
  @media (max-width: ${screens.md}) {
    grid-template-columns: 1fr;
    grid-template-areas: "input-name" "input-email" "input-whatsapp" "textarea-message" "btn-form";
  }
  #input-name,
  #input-email,
  #input-whatsapp,
  #btn-form,
  #textarea-message {
    width: 100%;
  }
  #input-name {
    grid-area: input-name;
  }
  #input-email {
    grid-area: input-email;
  }
  #input-whatsapp {
    grid-area: input-whatsapp;
  }
  #textarea-message {
    grid-area: textarea-message;
  }
  .button-form {
    grid-area: btn-form;
    width: 100px;
    margin-top: 1rem;
  }
`;
