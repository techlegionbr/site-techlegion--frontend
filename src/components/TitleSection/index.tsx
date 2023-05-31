import { color } from "@/styles/root"
import styled from "styled-components"


const TitleSectionStyled = styled.div`
  width: 100%;
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  &::after{
    content: "";
    position: absolute;
    width: 20%;
    height: 2px;
    background-color: ${color.light};
    bottom: -1rem;
    left: 0;
    right: 0;
    margin: auto;
    background: ${color.third};
    border-radius: .3rem;
    display: none;
  }
  h3{
    text-transform: uppercase;
    margin-bottom: .4rem;
    color: ${color.third}
  }
  h1{
    line-height: 2.5rem;
  }
  p{
    max-width: 500px;
    margin-top: 1.5rem;
    color: #ffffffc0;
  }
`

interface PropsTitleSection {
  title: string,
  subTitle: string,
  description?: string
}

const TitleSection = ({ title, subTitle, description }: PropsTitleSection): JSX.Element => {
  return (
    <TitleSectionStyled>
      <h3>{subTitle}</h3>
      <h1>{title}</h1>
      {description && (<p>{description}</p>)}
    </TitleSectionStyled>
  )
}

export default TitleSection