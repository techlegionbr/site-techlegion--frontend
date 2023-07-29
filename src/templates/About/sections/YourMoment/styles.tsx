import backgroundImage from "@/assets/images/backgrounds/homem-jaqueta-vr-primary.webp"
import { color, layout } from "@/styles/root";
import styled from "styled-components";

export const YourMoment = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px ${layout.containerPaddingX};
  background-color: ${color.primary};

  background-image: url(${backgroundImage.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  ::after{
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${color.primary};
    left: 0;
    top: 0;
    z-index: 0;
    opacity: .6;
  }
  .content{
    z-index: 1;
    width: ${layout.contentWidth};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p{
        margin-top: 2rem;
        max-width: 600px;
        text-align: center;
      }
    .button-contact{
      margin-top: 3rem;
    }
  }
`