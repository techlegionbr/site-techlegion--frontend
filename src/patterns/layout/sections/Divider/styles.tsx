import backgroundImage from "@/assets/images/backgrounds/cabeça-primary.webp"
import { color, layout } from "@/styles/root";
import styled from "styled-components";


interface ISectionDividerProps {
  bgColor: "primary" | "bluishGray"
}

export const SectionDivider = styled.div<ISectionDividerProps>`
  width: 100%;
  padding: 50px ${layout.containerPaddingX};
  display: flex;
  justify-content: center;
  background-color: ${({ bgColor }) => bgColor === "bluishGray" ? color.bluishGray : color.primary};
  background-image: url(${backgroundImage.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  .content{
    width: ${layout.contentWidth};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h2 > span{
      color: ${color.third}
    }
    p{
      margin-top: 1rem;
      text-align: center;
      max-width: 500px;
    }
  }
`