import { color, font, layout } from "@/styles/root";
import styled from "styled-components";


export const HeaderSettings = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 ${layout.containerPaddingX};
  height: 50px;
  background-color: ${color.primary};
  z-index: 15;
  border-bottom: 1.4px solid #7dc0ff1c;
  .content{
    width: ${layout.contentWidth};
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo{
      display: inline-flex;
    }
    .profile-settings{
      display: flex;
      align-items: center;
      gap: .7rem;
      justify-content:center;
      .name-display{
        font-size: ${font.size.xsm};
        span{
          font-weight: bold;
        }
      }
      .profile-image{
        width: 32px;
        height: 32px;
        overflow: hidden;
        border-radius: 50%;
        
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
`