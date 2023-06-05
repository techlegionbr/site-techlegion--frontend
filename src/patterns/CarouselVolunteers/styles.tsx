import { breackScreens, color } from "@/styles/root";
import styled from "styled-components";


export const CarouselVolunteers = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .controller{
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 40px;
    height: 40px;
    background-color: #2e2e6c;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: .9rem;
    border: 1.2px solid #ffffff1f;
    color: ${color.third}
    
  }
  .controller-left{
    left: 0;
  }
  .controller-right{
    right: 0;
  }
  .content-carousel{
    width: calc((200px * 3) + 2rem * (3 - 1));
    display: flex;
    gap: 2rem;
    overflow: hidden;
    scroll-behavior: smooth;
    @media (max-width: ${breackScreens.tablet}) {
      width: calc((200px * 2) + 2rem * (2 - 1));
    }
    @media (max-width: ${breackScreens.smart}) {
      width: calc((200px * 1) + 2rem * (1 - 1));
    }
  }
`