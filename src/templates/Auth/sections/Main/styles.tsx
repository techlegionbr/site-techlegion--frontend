import { color, layout } from "@/styles/root";
import styled from "styled-components";


export const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2rem ${layout.containerPaddingX} 200px ${layout.containerPaddingX};
  background-color: ${color.primary};
  .content{
    width: ${layout.contentWidth};
    display: flex;
    gap: 5rem;
    .line-vertical{
      width: 2px;
      height: 100%;
      background-color: #ffffff56;
    }
    .card-login, .card-register{
      width: 50%;
      form{
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: .5rem;
        .input-form{
          width: 100%;
        }
        .btn-form{
          margin-top: 1rem;
        }
      }
    }
  }
`