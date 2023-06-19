import { color, layout, screens } from "@/styles/root";
import styled from "styled-components";


export const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1rem ${layout.containerPaddingX} 1rem ${layout.containerPaddingX};
  background-color: ${color.primary};
  .content{
    width: ${layout.contentWidth};
    display: flex;
    align-items: flex-start;
    gap: 10%;
    @media (max-width: ${screens.md}) {
      flex-direction: column;
      gap: 3rem;
    }
    .card-login{
      width: 50%;
      padding-top: 2rem;
      @media (max-width: ${screens.md}) {
        width: 100%;
      }
      form{
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: .5rem;
        .input-form{
          width: 100%;
        }
        .btn-container-form{
          margin-top: 1rem;
          display: flex;
          gap: 3rem;
          align-items: center;
        }
        
      }
    }
    .image-form{
      width: 50%;
      height: 500px;
      overflow: hidden;
      border-radius: 1rem;
      @media (max-width: ${screens.md}) {
        width: 100%;
      }
      img{
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
  }
`