import styled from 'styled-components';

export const CreateManager = styled.div`
  form {
    width: 100%;
    display: grid;
    gap: 1rem;
    grid-template-areas:
      'input-name input-whatsapp input-email'
      'checkboxes-permissions checkboxes-permissions checkboxes-permissions'
      'input-weeklyPostCreationLimit input-weeklyManagerCreationLimit input-weeklyEditorCreationLimit'
      "btn-create-manager x x";
    grid-template-columns: 0.5fr 0.5fr 0.5fr;

    #input-name,
    #input-email,
    #input-whatsapp,
    #input-weeklyPostCreationLimit,
    #input-weeklyManagerCreationLimit,
    #input-weeklyEditorCreationLimit,
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
    #input-weeklyManagerCreationLimit {
      grid-area: input-weeklyManagerCreationLimit;
    }
    #input-weeklyEditorCreationLimit {
      grid-area: input-weeklyEditorCreationLimit;
    }

    .btn-create-manager {
      grid-area: btn-create-manager;
      width: 100px;
    }
  }
`;
