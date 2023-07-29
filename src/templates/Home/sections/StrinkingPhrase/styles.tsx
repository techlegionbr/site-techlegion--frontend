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
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      .image-author-01{
        width: 150px;
        height: 150px;
        border: 1.4px solid #8999ff41;
        position: relative;
        border-radius: 50%;
        flex: none;
        
        .image-author-02{
          width: 85%;
          height: 100%;
          position: absolute;
          left: 50%;
          transform: translateX(-50%) scale(1.28);
          top: -1.3rem;
          border-radius: 0 0 50% 50%;
          overflow: hidden;
          img{
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
      }
      article{
        .name, .known-for{
          display: block;
        }
        .name{
          margin-top: 1rem;
          font-weight: bold;
          font-size: ${font.size.sm};
          line-height: ${font.line_height.sm};
          color: #ffffffd6;
        }
        .known-for{
          font-size: ${font.size.xsm};
          line-height: ${font.line_height.xsm};
          color: ${color.third};
        }
      }
    }
  }
`