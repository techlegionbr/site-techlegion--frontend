import { screens, color, layout } from "@/styles/root";
import styled from "styled-components";


export const Main = styled.div`
  width: 100%;
  padding: 50px ${layout.containerPaddingX};
  display: flex;
  align-items: center;
  justify-content: center;
  .content{
    width: ${layout.contentWidth};
    .contacts-cards{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 3rem;
      flex-direction: column;
      
      gap: 1rem;
      .social-medias{
          width: 90%;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
          gap: 1rem;
          margin-bottom: .4rem;
          @media (max-width: ${screens.sm}) {
            gap: .5rem;
            grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
          }
          li{
            height: 100px;
            background-color: #1f1f53;
            border-radius: .6rem;
            cursor: pointer;
            overflow: hidden;
            border: 1.2px solid #7e9aff4f;
            transition: .2s;
            @media (max-width: ${screens.sm}) {
              height: 90px;
            }
            &:hover{
              transform: scale(1.1);
            }
            a{
              width: 100%;
              height: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              color: ${color.third};
              flex-direction: column;
              i{
                font-size: 1.7rem;
              }
              span{
                margin-top: .3rem;
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
        h3{
          display: none;
        }
        form{
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: .5rem;
          input, textarea{
            width: 100%;
            resize: none;
            padding: .6rem 1rem;
            border-radius: .4rem;
            border-width: 2px;
            border-style: inset;
            border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
            border-image: initial;
            font-size: .9rem;
            
          }
          textarea{
            height: 140px;
          }
          .button-form{
            width: 60px;
          }
        }
      }
    }
  }
`