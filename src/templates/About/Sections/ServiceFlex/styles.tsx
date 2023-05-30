import backgroundteste from "@/assets/images/backgrounds/bolas-no-fundo.png"
import { breackScreens, color, layout } from "@/styles/root";
import styled from "styled-components";


export const ServiceFlex = styled.div`
  width: 100%;
  padding: 100px ${layout.containerPaddingX};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${color.bluishGray};
  border-top: 2px solid #ffffff17;
  border-bottom: 2px solid #ffffff17;
  /* background-image: url(${backgroundteste.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  &::after{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #0a1929b5;
    z-index: 1;
  } */
  .content{
    z-index: 2;
    width: ${layout.contentWidth};
    display: flex;
    flex-direction: column;
    gap: 3rem;
    @media (max-width: ${breackScreens.tablet}) {
      gap: 4rem;
    }
    article{
      width: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 3rem;
      @media (max-width: ${breackScreens.tablet}) {
        flex-direction: column;
        gap: 1rem;
      }
      .image-article{
        width: 40%;
        height: 250px;
        border-radius: .6rem;
        overflow: hidden;
        border: 1.5px solid #331df62c;
        @media (max-width: ${breackScreens.tablet}) {
          width: 100%;
          height: 200px;
        }
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .description{
        width: 60%;
        @media (max-width: ${breackScreens.tablet}) {
          width: 100%;
        }
        h1{
          font-size: 2rem;
          line-height: 2.1rem;
          margin-bottom: 1.6rem;
          @media (max-width: ${breackScreens.tablet}) {
            font-size: 1.6rem;
            line-height: 1.7rem;
          }
          span{
            color: ${color.third}
          }
          
        }
        p{
          margin-top: .5rem;
        }
      }
    }
  }
`