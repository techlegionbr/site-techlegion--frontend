import { breackScreens, color, layout } from "@/styles/root";
import styled from "styled-components";


export const Values = styled.div`
  width: 100%;
  padding: 100px ${layout.containerPaddingX};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${color.primary};
  .content{
    width: ${layout.contentWidth};
    .list-values-card{
      width: 100%;
      gap: .8rem;
      margin-top: 4rem;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      li{
        height: 120px;
        padding: 0 .6rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        background-color: #191967;
        border-radius: .6rem;
        gap: .5rem;
        border: 1.3px solid #609aff6c;
        
        i{
          font-size: 2rem;
          color: ${color.third}
        }
        h4{
          text-transform: uppercase;
          line-height: 1rem;
        }
      }
    }
    .social-articles{
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-top: 3rem;
      gap: 3rem;
      @media (max-width: ${breackScreens.tablet}) {
        gap: 4rem;
      }
      article{
        width: 100%;
        display: flex;
        gap: 2rem;
        @media (max-width: ${breackScreens.tablet}) {
          flex-direction: column;
          gap: 1rem;
        }
        .image-article{
          width: 40%;
          height: 250px;
          overflow: hidden;
          border-radius: .4rem;
          border: 1.5px solid #331df62c;
          @media (max-width: ${breackScreens.tablet}) {
            width: 100%;
          }
          img{
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .descriptio-article{
          width: 60%;
          @media (max-width: ${breackScreens.tablet}) {
            width: 100%;
          }
          h2{
            margin-bottom: 1rem;
          }
          p{
            margin-top: .5rem;
          }
          .button-know-more{
            margin-top: 2rem;
          }
        }
      }
    }
  }
`