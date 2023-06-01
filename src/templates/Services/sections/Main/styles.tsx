import { color, layout } from "@/styles/root";
import styled from "styled-components";



export const Main = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px ${layout.containerPaddingX};
  .content{
    width: ${layout.contentWidth};
  }
`

export const CardsService = styled.div`
  width: 100%;
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
`

export const CardService = styled.div`
  width: 100%;
  height: 500px;
  background-color: #191956;
  padding: 2rem 1rem;
  position: relative;
  border-radius: .7rem;
  border: 1.3px solid #625bf23f;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: start;
  .circle-icon{
    width: 80px;
    height: 80px;
    font-size: 2.4rem;
    background-color: #32329d;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin-bottom: 2rem;
    border: 1.2px solid #7e75ff75;
    color: ${color.third}
  }
  .button-know-more{
    position: absolute;
    width: 100px;
    bottom: 2rem;
    left: 0;
    right: 0;
    margin: auto;
  }
  h3{
    width: 100%;
    margin-bottom: 1rem;
  }
  p{
    width: 100%;
  }
`