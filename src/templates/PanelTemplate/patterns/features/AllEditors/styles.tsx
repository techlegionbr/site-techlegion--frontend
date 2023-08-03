
import styled from "styled-components";


export const AllEditors = styled.div`
  width: 100%;
  .editors-list{
    width: 100%;
    margin-top: 2rem;  
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    .card-editor-preview{
      width: 100%;
    }
  }
`