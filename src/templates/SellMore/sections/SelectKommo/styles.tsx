import { color, layout, screens } from "@/styles/root";
import styled from "styled-components";

export const SelectKommo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 100px ${layout.containerPaddingX};
  background-color: ${color.primary};
  .content{
    width: ${layout.contentWidth};
    .reasons-articles{
      margin-top: 5rem;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 4rem;
      .reason-article{
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 4rem;
        @media (max-width: ${screens.md}) {
          flex-direction: column;
          gap: 1rem;
        }
        .reason-description{
          width: 60%;
          @media (max-width: ${screens.md}) {
            width: 100%;
          }
          p{
            margin-top: 1rem;
          }
          .btn-sell-more{
            margin-top: 2rem;
          }
        }
        .reason-image{
          width: 40%;
          height: 300px;
          @media (max-width: ${screens.md}) {
            width: 100%;
            height: 250px;
          }
          img{
            width: 100%;
            object-fit: contain;
            height: 100%;
            object-position: 0 0;
            @media (max-width: ${screens.md}) {
              object-position: center;
            }
          }
        }
      }
    }
  }

`