import backgroundImageGray from "@/assets/images/backgrounds/gladiador-gray.webp"
import backgroundImagePrimary from "@/assets/images/backgrounds/gladiador-primary.webp"
import { color, layout, screens } from "@/styles/root";
import styled from "styled-components";


interface ISectionDividerProps {
  bgColor: "primary" | "bluishGray"
}

export const SectionDivider = styled.div<ISectionDividerProps>`
  width: 100%;
  padding: 70px ${layout.containerPaddingX};
  display: flex;
  justify-content: center;
  background-color: ${({ bgColor }) => bgColor === "bluishGray" ? color.bluishGray : color.primary};
  background-image: url(${({ bgColor }) => bgColor === "bluishGray" ? backgroundImageGray.src : backgroundImagePrimary.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  .content{
    width: ${layout.contentWidth};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    h2{
      span{
        position: relative;
        .icon-crown{
          position: absolute;
          font-size: 1rem;
          top: -0.3rem;
          transform: rotate(30deg);
          right: -.9rem;
          color: ${color.alert};
          @media (max-width: ${screens.sm}) {
            font-size: .8rem;
            right: -.8rem;
            top: .1rem;
            transform: rotate(40deg);
          }
        }
      }
    
    }
    p{
      margin-top: 1rem;
      max-width: 500px;
    }
  }
`