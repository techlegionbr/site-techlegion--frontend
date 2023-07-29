import { presenceAnimation } from "@/animations/presence";
import { color } from "@/styles/root";
import styled from "styled-components";


interface ILegendItemProps {
  widthLegend?: number
}

export const LegendItem = styled.div<ILegendItemProps>`
  display: inline-flex;
  width: auto;
  position: relative;
  .legend-text{
    ${({ widthLegend }) => widthLegend ? `
      width: ${widthLegend}px;
    ` : ""}
    position: absolute;
    font-weight: bold;
    background: ${color.dark};
    cursor: default;
    padding: .4rem 1rem;
    border-radius: .3rem;
    text-align: center;
    font-size: .9rem;
    z-index: 20;
    white-space: nowrap;
    ${presenceAnimation({
  animation: "scale",
  duration: .4
})
  }
  }
`