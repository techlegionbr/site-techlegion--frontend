import { color, layout } from "@/styles/root";
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
    gap: 8rem;
    .card-login{
      width: 50%;
      padding-top: 2rem;
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
      position: relative;
      /* border: 1.4px solid #7974f972; */
      h2{
        position: absolute;
        background-color: #6c65fa69;
        backdrop-filter: blur(5px);
        width: 300px;
        padding: .4rem 0;
        text-align: center;
        left: 0;
        right: 0;
        top: 3rem;
        margin: auto;
        border-radius: .4rem;
      }
      img{
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
  }
`