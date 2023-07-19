import { color, layout } from "@/styles/root";
import styled from "styled-components";


export const Clients = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${color.bluishGray};
  padding: 140px ${layout.containerPaddingX};
  .content{
    width: ${layout.contentWidth};
    .logo-client-list{
      margin-top: 4rem;
      width: 100%;
      display: flex;
      justify-content: center;
      border-radius: 7rem;
      gap: 2rem;
      overflow: hidden;
      li{
        flex: none;
        width: 200px;
        height: 200px;
        border-radius: 50%;
        background-color: #1d1d36;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        
      }
    }
  }
`