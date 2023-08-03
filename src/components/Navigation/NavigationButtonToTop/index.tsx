import scrollToTop from "@/utils/layout/scrollToTop"
import styled from "styled-components"


const NavigationButtonToTopStyled = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 10;
  width: 40px;
  height: 40px;
  border-radius: 1rem;
  background-color: #05142379;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1.3px solid #5cacf23f;
  backdrop-filter: blur(3px);
  opacity: .7;
  transition: .2s;
  &:hover{
    opacity: 1;
  }
`


const NavigationButtonToTop = (): JSX.Element => {
  return (
    <NavigationButtonToTopStyled onClick={scrollToTop} id="button-to-top" title="Botão para levar ao topo">
      <i className='bx bxs-chevron-up'></i>
    </NavigationButtonToTopStyled>
  )
}


export default NavigationButtonToTop