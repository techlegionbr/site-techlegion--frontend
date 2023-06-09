
import backgroundImageMain from "@/assets/images/backgrounds/techlegion-fundo.webp"
import { screens, color, layout, font } from "@/styles/root"
import styled from "styled-components"

export const Main = styled.section`
  width: 100%;

  padding: 50px 1rem;

  background-color: ${color.primary};

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url(${backgroundImageMain.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (max-width: ${screens.xlg}) {
    min-height: calc(100vh - (${layout.header.sub} + ${layout.header.sup}));
  }
  .content{
    width: ${layout.contentWidth};

    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 2rem;
    @media (max-width: ${screens.md}) {
      flex-direction: column;
    }
    .description-apresentation{
      
      backdrop-filter: blur(5px);
      padding: 2rem;
      border-radius: 1rem;
      width: 60%;
      border: 1.3px solid #768ff42a;
      @media (max-width: ${screens.md}) {
        width: 100%;
        padding: 2rem 1rem;
      }
      h4{
        margin-bottom: .5rem;
        @media (max-width: ${screens.sm}) {
          line-height: .6rem;
        }
      }
      h1{
        font-size: ${font.size.xxlg};
        line-height: ${font.line_height.xxlg};
        @media (max-width: ${screens.sm}) {
          font-size: calc(${font.size.xxlg} - .3rem);
          line-height: calc(${font.line_height.xxlg} - .3rem);
        }
        span{
          color: ${color.third}
        }
      }
      .slogan-tags{
        margin-top: 1.9rem;
        display: flex;
        gap: .4rem;
        flex-wrap: wrap;
        li{
          display: flex;
          align-items: center;
          gap: .2rem;
          text-transform: uppercase;
          background-color: ${color.primary};
          padding: .4rem .8rem;
          border-radius: .2rem;
          font-size: ${font.size.xsm};
          font-weight: bold;
          border: 1px solid #7599f54f;
          cursor: default;
          color: ${color.third};
          @media (max-width: ${screens.sm}) {
            padding: .3rem .5rem;
            font-size: calc(${font.size.xsm} - .2rem);
          }
          i{
            font-size: 1.1rem;
            color: ${color.third}
          }
        }
      }
      p{
        margin-top: 1.3rem;
        border-left: 3px solid ${color.third};
        padding-left: 1rem;
      }
      .button-whatsapp{
        margin-top: 2rem;
        @media (max-width: ${screens.sm}) {
          width: 100%;
          padding-left: 0;
          padding-right: 0;
        }
      }
    }
    .video-amoster-container{
      width: 40%;
      height: 400px;
      display: flex;
      justify-content: flex-end;
      @media (max-width: ${screens.md}) {
        width: 100%;
        justify-content: center;
      }
      .video-amoster{
        display: inline-block;
        width: auto;
        height: 100%;
        overflow: hidden;
        border-radius: .6rem;
        position: relative;
        &::after, &::before{
          content: "";
          position: absolute;
          width: 100%;
          height: 10px;
          background-color: ${color.secondary};
        }
        &::after{
          top: 0;
          left: 0;
        }
        &::before{
          bottom: 0;
          left: 0;
        }
      }
      video{
        width: 100%;
        height: 100%;
      }
    }
  }

`