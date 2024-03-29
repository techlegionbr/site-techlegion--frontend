import { screens, color } from "@/styles/root";
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
    color: ${color.third};
    opacity: .7;
    transition: .2s;
    &:hover{
      opacity: 1;
    }
    @media (max-width: ${screens.sm}) {
      width: 30px;
      height: 30px;
      font-size: .7rem;
    }
    
  }
  .controller-disabled{
    opacity: .4;
    pointer-events: none;
  }
  .controller-left{
    left: 0;
  }
  .controller-right{
    right: 0;
  }
  .content-carousel{
    width: calc((240px * 3) + 2rem * (3 - 1));
    display: flex;
    gap: 2rem;
    overflow: hidden;
    scroll-behavior: smooth;
    @media (max-width: 915px) {
      width: calc((240px * 2) + 2rem * (2 - 1));
    }
    @media (max-width: 655px) {
      width: calc((240px * 1) + 2rem * (1 - 1));
    }
  }
`