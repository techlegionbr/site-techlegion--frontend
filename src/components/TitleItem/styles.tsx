import { presenceAnimation } from "@/animations/presence";
import { color } from "@/styles/root";
import styled from "styled-components";


export const TitleItem = styled.div`
  display: inline-flex;
  position: relative;
`

export const SubTitle = styled.div`
    position: absolute;
    text-align: center;
    bottom: -1.8rem;
    white-space: nowrap;
    font-size: .8rem;
    background-color: ${color.dark};
    color: ${color.light};
    left: 50%;
    transform: translateX(-50%);

    padding: .2rem .8rem;
    border-radius: .3rem;
    pointer-events: none;
    transition: .2s;
    opacity: 0;
    ${presenceAnimation({
  animation: "opacity",
  duration: .3,
  delay: .5,
  fillMode: "forwards"
})}
    &::after{
      content: "";
      position: absolute;
      width: 10px;
      height: 10px;
      background-color: ${color.dark};
      left: 50%;
      transform: rotate(45deg) translateX(-50%);
      top: 0;
    }
`