import backgroundRocket from "@/assets/images/backgrounds/rocket-fundo.png"
import { color, layout } from "@/styles/root";
import styled from "styled-components";

export const About = styled.div`
  width: 100%;
  padding: 100px ${layout.containerPaddingX};
  background-color: ${color.bluishGray};
  border-top: 2px solid #ffffff17;
  border-bottom: 2px solid #ffffff17;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${backgroundRocket.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  .content{
    width: ${layout.contentWidth};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p{
      margin-top: 2rem;
      text-align: center;
      max-width: 500px;
      backdrop-filter: blur(7px);
      padding: .6rem 1rem;
      border-radius: .4rem;
      border: 1.2px solid #a496ff42;
      background-color: #0a192962;
    }
    .button-know-more{
      margin-top: 2rem;
    }
  }

`