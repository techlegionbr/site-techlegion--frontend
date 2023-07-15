import backgroundImageGray from "@/assets/images/backgrounds/gladiador-gray.webp"
import backgroundImagePrimary from "@/assets/images/backgrounds/gladiador-primary.webp"
import { color, layout } from "@/styles/root";
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
  position: relative;
  ::after{
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${({ bgColor }) => bgColor === "bluishGray" ? color.bluishGray : color.primary};
    opacity: .5;
    top: 0;
    left: 0;
    z-index: 0;
  }
  .content{
    width: ${layout.contentWidth};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    z-index: 1;
    h2{
      span{
        position: relative;
        .icon-crown{
          position: absolute;
          font-size: 1rem;
          top: -.2rem;
          transform: rotate(30deg);
          right: -.8rem;
          color: ${color.alert};
          
        }
      }
    
    }
    p{
      margin-top: 1rem;
      max-width: 500px;
    }
  }
`