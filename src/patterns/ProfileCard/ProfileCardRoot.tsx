import { type ReactNode } from "react"

import * as S from "./styles"

interface IProfileCardRootProps {
  children: ReactNode,
  className?: string
}

const ProfileCardRoot = ({ children, className }: IProfileCardRootProps): JSX.Element => {
  return (
    <S.ProfileCardRoot className={className}>
      {children}
    </S.ProfileCardRoot>
  )
}

export default ProfileCardRoot