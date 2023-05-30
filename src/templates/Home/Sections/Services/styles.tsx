
import { breackScreens, color, layout } from "@/styles/root"
import styled from "styled-components"


export const Services = styled.section`
  width: 100%;
  padding: 100px ${layout.containerPaddingX};
  background: ${color.bluishGray};

  display: flex;
  align-items: center;
  justify-content: center;

  border-top: 2px solid #ffffff17;
  border-bottom: 2px solid #ffffff17;
  .content{
    width: ${layout.contentWidth};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .services-cards{
      width: 100%;
      margin-top: 4rem;
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
      display: grid;
      grid-template-areas: "card-head card-head" "card-body-1 card-body-2";
      @media (max-width: ${breackScreens.tablet}) {
        grid-template-areas: "card-head" "card-body-1" "card-body-2";
      }
      .card:nth-child(1){
        grid-area: card-head;
      }
      .card:nth-child(2){
        grid-area: card-body-1;
      }
      .card:nth-child(3){
        grid-area: card-body-2;
      }
      .card{
        height: auto;
        background-color: #0c2137;
        padding: 2rem;
        border-radius: .3rem;
        border: 2px solid #9292fa24;
        position: relative;
        .image-head{
          width: 100%;
          height: 250px;
          overflow: hidden;
          border-radius: .6rem;
          img{
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .description{
          width: 100%;
          height: auto;
          padding-top: 1rem;
          p{
            margin-top: 1rem;
          }

          .button-know-more{
            margin-top: 1.4rem;
          }
        }
      }
    }
    .button-more-services{
      margin-top: 4rem;
    }
  }
`