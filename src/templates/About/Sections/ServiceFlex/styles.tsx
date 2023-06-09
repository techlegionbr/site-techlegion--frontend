
import { screens, color, layout } from "@/styles/root";
import styled from "styled-components";


export const ServiceFlex = styled.div`
  width: 100%;
  padding: 100px ${layout.containerPaddingX};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${color.bluishGray};
  .content{
    width: ${layout.contentWidth};
    display: flex;
    flex-direction: column;
    gap: 3rem;
    @media (max-width: ${screens.md}) {
      gap: 4rem;
    }
    article{
      width: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 3rem;
      @media (max-width: ${screens.md}) {
        flex-direction: column;
        gap: 1rem;
      }
      .image-article{
        width: 50%;
        height: 300px;
        border-radius: .6rem;
        overflow: hidden;
        border: 1.5px solid #331df62c;
        @media (max-width: ${screens.md}) {
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
        width: 50%;
        @media (max-width: ${screens.md}) {
          width: 100%;
        }
        h2{
          margin-bottom: 1.6rem;
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