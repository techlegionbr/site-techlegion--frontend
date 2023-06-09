import backgroundImageMain from "@/assets/images/backgrounds/mão-robo-primary.webp"
import { screens, color, layout, font } from "@/styles/root";
import styled from "styled-components";

export const StrikingPhrase = styled.div`
  width: 100%;
  padding: 100px ${layout.containerPaddingX};
  background-color: ${color.primary};
  display: flex;
  align-items: center;
  justify-content: center;

  /* background-image: url(${backgroundImageMain.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center; */
  .content{
    width: ${layout.contentWidth};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .quate-icon{
      font-size: 3rem;
      color: ${color.third};
    }
    p{
      margin-top: 1.6rem;
      font-size: ${font.size.lg};
      line-height: ${font.line_height.lg};
      font-weight: bold;
      text-align: center;
      @media (max-width: ${screens.sm}) {
        font-size: 1.7rem;
      }
    }
    .profile-author{
      margin-top: 4rem;
      background: #0b134c;
      padding: 1rem 1.3rem;
      border: 1px solid #909bfa5b;
      border-radius: .5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .image-author{
        width: 70px;
        height: 70px;
        overflow: hidden;
        border-radius: 50%;
        border: 1.4px solid #8999ff41;
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      small{
        margin-top: 1rem;
        font-weight: bold;
        font-size: 1rem;
        color: #ffffffd6;
        
      }
    }
  }
`