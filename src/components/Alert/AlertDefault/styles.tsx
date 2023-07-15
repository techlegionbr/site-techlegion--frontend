
import { presenceAnimation } from "@/animations/presence";
import styled from "styled-components";


export const AlertDefault = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  background-color: #0a124458;
  ${presenceAnimation({
  animation: "opacity",
  duration: .3
})}
  .card{
    position: absolute;
    cursor: default;
    background-color: #201c64;
    top: 1rem;
    left: 0;
    right: 0;
    max-width: 600px;
    margin: auto;
    display: flex;
    align-items: center;
    padding: 1rem 6rem 1rem 2rem;
    border-radius: .5rem;
    border: 1.3px solid #6e92ff27;
    ${presenceAnimation({
  animation: "translateUp",
  duration: .3
})};
    gap: 1rem;
    transition: .2s;

    i{
      font-size: 1.3rem;
    }
    .btn-close-alert{
      position: absolute;
      right: .5rem;
      font-size: .7rem;
      color: #4aaef6;
      opacity: .8;
      top: .5rem;
      width: 28px;
      height: 28px;
      background-color: #25208a;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #8d8bff28;
      transform: scale(.7);
      transition: .2s;
      &:hover{
        opacity: 1;
      }
    }
    .helper-texts{
      display: flex;
      flex-direction: column;
      gap: .2rem;
      small{
        text-transform: uppercase;
        font-size: .7rem;
      }
      p{
        font-weight: bold;
        white-space: break-spaces;
      }
    }
    
  }
`