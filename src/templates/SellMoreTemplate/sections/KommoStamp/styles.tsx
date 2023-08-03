import backgroundImageKommo from "@/assets/images/backgrounds/fundo-kommo.webp"
import { color, layout, screens } from "@/styles/root";
import styled from "styled-components";

export const KommoStamp = styled.div`
  width: 100%;
  padding: 5rem ${layout.containerPaddingX};
  display: flex;
  justify-content: center;
  background-color: ${color.bluishGray};
  /* background-image: url(${backgroundImageKommo.src});
  background-size: cover;
  background-repeat: no-repeat; */
  .content{
    width: ${layout.contentWidth};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    .stap-kommo-container{
      width: 100%;
      margin-top: 4rem;
      display: flex;
      gap: 2rem;
      justify-content: center;
      align-items: center;
      @media (max-width: ${screens.md}) {
        flex-direction: column;
        gap: 3rem;
      }
      .stamp-image{
        transform: rotate(-20deg);
      }
      .description{
        @media (max-width: ${screens.md}) {
          text-align: center;
        }
        p{
          margin-top: .5rem;
        }
      }
    }
    
    h3{
      
    }
    .btn-contact{
      margin-top: 3rem;
    }
  }
`