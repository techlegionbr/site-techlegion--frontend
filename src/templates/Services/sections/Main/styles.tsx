import { layout } from "@/styles/root";
import styled from "styled-components";



export const Main = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px ${layout.containerPaddingX};
  .content{
    width: ${layout.contentWidth};
  }
`

export const CardsService = styled.div`
  width: 100%;
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
`

export const CardService = styled.div`
  width: 100%;
  height: 400px;
  background-color: #191956;
  padding: 2rem 1rem;
  position: relative;
  border-radius: .7rem;
  border: 1.3px solid #625bf23f;
  .button-know-more{
    position: absolute;
    width: 100px;
    bottom: 2rem;
    left: 0;
    right: 0;
    margin: auto;
  }
`