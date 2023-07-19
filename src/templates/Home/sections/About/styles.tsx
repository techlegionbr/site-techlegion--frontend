import backgroundRocket from "@/assets/images/backgrounds/foguetao-gray.webp"
import { color, layout, screens } from "@/styles/root";
import styled from "styled-components";

export const About = styled.div`
  width: 100%;
  padding: 100px ${layout.containerPaddingX};
  background-color: ${color.bluishGray};
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${backgroundRocket.src});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  position: relative;
  @media (max-width: ${screens.lg}) {
    background-size: cover;
  }
  ::after{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background-color: ${color.bluishGray};
    opacity: .5;
  }
  .content{
    width: ${layout.contentWidth};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1;
    p{
      margin-top: 2rem;
      text-align: center;
      max-width: 500px;
    }
    .button-know-more{
      margin-top: 2rem;
    }
  }

`