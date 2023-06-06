import styled from "styled-components";



export const HamburgerStyle = styled.label`
cursor: pointer;

input{
  display: none;
}
svg {
  height: 2em;
  transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
}
.line {
  fill: none;
  stroke: white;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 3;
  /* Define the transition for transforming the Stroke */
  transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
              stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
}

.line-top-bottom {
  stroke-dasharray: 12 63;
}

input:checked + svg {
  transform: rotate(-45deg);
}

input:checked + svg .line-top-bottom {
  stroke-dasharray: 20 300;
  stroke-dashoffset: -32.42;
}

`
