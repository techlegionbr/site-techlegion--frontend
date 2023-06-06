import styled from "styled-components"


const HorizontalLineStyled = styled.hr`
  height: 2px;
  background-color: #4545d631;
  border: none;
`

const HorizontalLine = (): JSX.Element => {
  return (
    <HorizontalLineStyled />
  )
}

export default HorizontalLine