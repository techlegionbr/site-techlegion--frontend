

import * as S from "./styles"

interface IProfileCardContentProps {
  name: string,
  charge: string
}

const ProfileCardContent = ({ name, charge }: IProfileCardContentProps): JSX.Element => {
  return (
    <S.ProfileCardContent>
      <h4>{name}</h4>
      <small> {charge} </small>
    </S.ProfileCardContent>
  )
}

export default ProfileCardContent