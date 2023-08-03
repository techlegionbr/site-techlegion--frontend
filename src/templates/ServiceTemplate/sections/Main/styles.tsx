import { color, layout } from "@/styles/root";
import styled from "styled-components";


export const Main = styled.div`
  width: 100%;
  padding: 50px ${layout.containerPaddingX};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${color.primary};
  .content{
    width: ${layout.contentWidth};
    .image-service{
      margin-top: 3rem;
      border-radius: 1rem;
      overflow: hidden;
      width: 100%;
      height: 300px;
      border: 1.5px solid #82aaff53;
      position: relative;
      background-color: #16164d;
      .icon-service{
        position: absolute;
        top: 1rem;
        right: 1rem;
        width: 40px;
        height: 40px;
        background-color: ${color.secondary};
        border-radius: .6rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`