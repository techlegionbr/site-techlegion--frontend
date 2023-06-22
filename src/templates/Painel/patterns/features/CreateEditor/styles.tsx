import styled from "styled-components";


export const CreateEditor = styled.div`
form {
    width: 100%;
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .form-top {
      display: grid;
      gap: 1rem;
      grid-template-areas:
        'input-name input-email'
        'checkboxes-permissions checkboxes-permissions';
      grid-template-columns: 0.5fr 0.5fr;
      #input-name,
      #input-email,
      #checkboxes-permissions {
        width: 100%;
      }
      #input-name {
        grid-area: input-name;
      }
      #input-email {
        grid-area: input-email;
      }
      #checkboxes-permissions {
        grid-area: checkboxes-permissions;
      }
    }
    .form-footer{
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, .1fr));
      gap: 1rem;
      .input-form-footer{
        width: 100%;
      }
    }

    .btn-create-manager {
      width: 100px;
    }
  }
`