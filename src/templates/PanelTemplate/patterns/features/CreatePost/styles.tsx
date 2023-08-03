import styled from "styled-components";


export const CreatePost = styled.div`
  form{
    margin-top: 2rem;
    display: grid;
    grid-template-areas:"title-input route-name-input" 
                        "description-textarea description-textarea" 
                        "text-editor-conteiner text-editor-conteiner";
    grid-template-columns: .5fr .5fr;
    gap: 1.5rem;
    .title-input, .route-name-input, .description-textarea, .text-editor-conteiner{
      width: 100%;
    }
    .title-input{
      grid-area: title-input;
    }
    .route-name-input{
      grid-area: route-name-input;
    }
    .description-textarea{
      grid-area: description-textarea;
      textarea{
        resize: none;
      }
    }
    .text-editor-conteiner{
      grid-area: text-editor-conteiner;
    }
    .btn-create-post{
      width: 200px;
    }
  }
`