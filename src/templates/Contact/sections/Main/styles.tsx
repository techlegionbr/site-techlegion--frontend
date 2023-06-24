import backgroundImageMain from "@/assets/images/backgrounds/homem-com-vr-apontando-primary.webp"
import { screens, color, layout } from "@/styles/root";
import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  padding: 50px ${layout.containerPaddingX};
  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url(${backgroundImageMain.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  .content{
    width: ${layout.contentWidth};
    .contacts-cards{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 4rem;
      flex-direction: column;
      gap: 1rem;
      .social-medias{
          width: 90%;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));

          gap: 1rem;
          margin-top: 3rem;
          @media (max-width: ${screens.sm}) {
            gap: .5rem;
            
          }
          li{
            height:40px;
            background-color: #161c4e12;
            backdrop-filter: blur(5px);
            border-radius: .6rem;
            cursor: pointer;
            overflow: hidden;
            border: 1.2px solid #6f8efd57;
            transition: .2s;
            /* @media (max-width: ${screens.sm}) {
              height: 90px;
            } */
            &:hover{
              transform: scale(1.1);
            }
            &:hover > a{
              opacity: 1;
            }
            a{
              width: 100%;
              height: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 0 1rem;
              gap: .4rem;
              opacity: .7;
              color: ${color.third};
              transition: .2s;
              @media (max-width: ${screens.sm}) {
                justify-content: flex-start;
              }
              i{
                font-size: 1rem;
              }
              span{
                text-transform: uppercase;
                font-weight: bold;
                font-size: .8rem;
              }
            }
          }
        }
      .form-contact{
        width: 90%;
        min-width: 300px;
        border-radius: .5rem;
        position: relative;
      }
    }
  }
`