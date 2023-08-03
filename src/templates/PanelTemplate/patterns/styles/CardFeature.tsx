import { presenceAnimation } from "@/animations/presence";
import styled from "styled-components";

interface ICardFeatureStyledProps {
  order: number
}

const CardFeatureStyled = styled.div<ICardFeatureStyledProps>`
  width: 100%;
  background-color: #171742;
  padding: 1rem;
  border-radius: .4rem;
  border: 1.3px solid #8cb8ff35;
  margin-bottom: 1rem;
  opacity: 0;
  ${({ order }) => (
    presenceAnimation({
      animation: "scale",
      duration: .3,
      delay: order / 10,
      fillMode: "forwards"
    })
  )}
  h4{
    margin-bottom: 2rem;
  }
`

export default CardFeatureStyled