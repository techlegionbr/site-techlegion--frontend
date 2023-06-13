import styled from "styled-components"


const NoBrStyled = styled.span`
  white-space: nowrap;
`


interface NoBrProps {
  children: string
}

const NoBr = ({ children }: NoBrProps): JSX.Element => {
  return (
    <NoBrStyled>{children}</NoBrStyled>
  )
}

export default NoBr