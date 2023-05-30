import { color, layout, breackScreens } from "@/styles/root";
import styled from "styled-components";


export const Principles = styled.div`
  width: 100%;
  padding: 100px ${layout.containerPaddingX};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${color.bluishGray};
  border-top: 2px solid #ffffff17;
  border-bottom: 2px solid #ffffff17;
  .content{
    width: ${layout.contentWidth};
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 3rem;
    height: 450px;
    @media (max-width: ${breackScreens.tablet}) {
      flex-direction: column;
      height: auto;
    }
    .description-principles{
      width: 60%;
      height: 100%;
      @media (max-width: ${breackScreens.tablet}) {
        width: 100%;
      }
      h5{
        margin-bottom: 2rem;
        text-transform: uppercase;
        font-weight: 400;
        color: #ffffffd5;
      }
      h2{
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
      @media (max-width: ${breackScreens.tablet}) {
        display: none;
      }
      @media (max-width: ${breackScreens.smart}) {
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

