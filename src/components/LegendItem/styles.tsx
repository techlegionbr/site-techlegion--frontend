import { presenceAnimation } from "@/animations/presence";
import { color } from "@/styles/root";
import styled from "styled-components";


interface ILegendItemProps {
  widthLegend?: number,
  sizeLegend: "sm" | "md" | "lg"
}

const sizesLegend = {
  sm: ".7rem",
  md: ".8rem",
  lg: "1.1rem"
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
    font-size: ${({ sizeLegend }) => sizesLegend[sizeLegend]};
    z-index: 20;
    white-space: nowrap;
    ${presenceAnimation({
  animation: "scale",
  duration: .4
})
  }
  }
`