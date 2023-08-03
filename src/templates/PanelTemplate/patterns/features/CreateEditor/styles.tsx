import styled from 'styled-components';

export const CreateEditor = styled.div`
  form {
    width: 100%;
    display: grid;
    gap: 1rem;
    grid-template-areas:
      'input-name input-whatsapp input-email'
      'checkboxes-permissions checkboxes-permissions checkboxes-permissions'
      'input-weeklyPostCreationLimit x x'
      "btn-create-editor x x";
    grid-template-columns: 0.5fr 0.5fr 0.5fr;
    #input-name,
    #input-email,
    #input-whatsapp,
    #input-weeklyPostCreationLimit,
    #checkboxes-permissions {
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
    #checkboxes-permissions {
      grid-area: checkboxes-permissions;
    }
    #input-weeklyPostCreationLimit {
      grid-area: input-weeklyPostCreationLimit;
    }
    #teste{
      grid-area: a;
    }

    .btn-create-editor {
      grid-area: btn-create-editor;
      width: 100px;
    }
  }
`;
