
import backgroundImageMain from "@/assets/images/backgrounds/techlegion-fundo.png"
import { breackScreens, color, layout } from "@/styles/root"
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

  @media (max-width: ${breackScreens.tv}) {
    min-height: calc(100vh - (${layout.header.sub} + ${layout.header.sup}));
  }
  .content{
    width: ${layout.contentWidth};

    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 2rem;
    @media (max-width: ${breackScreens.tablet}) {
      flex-direction: column;
    }
    .description-apresentation{
      
      backdrop-filter: blur(5px);
      padding: 2rem;
      border-radius: 1rem;
      width: 60%;
      border: 1.3px solid #768ff42a;
      @media (max-width: ${breackScreens.tablet}) {
        width: 100%;
        padding: 2rem 1rem;
      }
      h4{
        margin-bottom: .5rem;
        @media (max-width: ${breackScreens.smart}) {
          line-height: .6rem;
        }
      }
      h1{
        font-size: 3.6rem;
        line-height: 3.4rem;
        @media (max-width: ${breackScreens.smart}) {
          font-size: 2.8rem;
          line-height: 2.6rem;
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
          font-size: .7rem;
          font-weight: bold;
          border: 1px solid #7599f54f;
          cursor: default;
          color: ${color.third};
          @media (max-width: ${breackScreens.smart}) {
            padding: .3rem .5rem;
            font-size: .6rem;
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
        @media (max-width: ${breackScreens.smart}) {
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
      @media (max-width: ${breackScreens.tablet}) {
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