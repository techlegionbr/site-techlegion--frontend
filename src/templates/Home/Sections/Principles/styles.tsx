import { color, layout, screens } from "@/styles/root";
import styled from "styled-components";


export const Principles = styled.div`
  width: 100%;
  padding: 100px ${layout.containerPaddingX};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${color.bluishGray};
  .content{
    width: ${layout.contentWidth};
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 3rem;
    height: 450px;
    @media (max-width: ${screens.md}) {
      flex-direction: column;
      height: auto;
    }
    .description-principles{
      width: 60%;
      height: 100%;
      @media (max-width: ${screens.md}) {
        width: 100%;
      }
      small{
        text-transform: uppercase;
        font-weight: 400;
        color: #ffffffd5;
      }
      h3{
        margin-top: 2rem;
        span{
          color: ${color.third}
        }
      }
      p{
        margin-top: 3rem;
      }
    }
    .image-principles{
      width: 40%;
      height: 500px;
      overflow: hidden;
      border-radius: .5rem;
      border: 1.4px solid #9290fc4e;
      @media (max-width: ${screens.md}) {
        display: none;
      }
      @media (max-width: ${screens.sm}) {
        display: inline-block;
        width: 100%;
        height: 540px;
      }
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
       
      }
    }
  }
`

