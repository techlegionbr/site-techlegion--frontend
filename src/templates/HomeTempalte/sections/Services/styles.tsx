
import { screens, color, layout } from "@/styles/root"
import styled from "styled-components"


export const Services = styled.section`
  width: 100%;
  padding: 100px ${layout.containerPaddingX};
  background: ${color.bluishGray};

  display: flex;
  align-items: center;
  justify-content: center;

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
      @media (max-width: ${screens.md}) {
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
        padding: 2rem 2rem 7rem 2rem;
        border-radius: .3rem;
        border: 1.5px solid #9292fa24;
        position: relative;
        @media (max-width: ${screens.sm}) {
          padding: 2rem 1rem 7rem 1rem;
        }
        .image-head{
          width: 100%;
          height: 250px;
          overflow: hidden;
          border-radius: .2rem;
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
            position: absolute;
            bottom: 2rem;
          }
        }
      }
    }
    .button-more-services{
      margin-top: 4rem;
    }
  }
`