import Image from "next/image"

import * as S from "./styles"

interface IAlertNewEntitieProps {
  entitie: {
    name: string,
    profile: string,
    email: string,
    passowrd: string
  },
  show: boolean
}

const AlertNewEntitie = ({ entitie: { email, name, passowrd, profile }, show }: IAlertNewEntitieProps): JSX.Element => {
  return show ? (
    <S.AlertNewEntitie>
      <div className="card">
        <div className="profile">
          <Image src={profile} alt={name} width={70} height={70} />
        </div>
      </div>
    </S.AlertNewEntitie>
  ) : <></>
}

export default AlertNewEntitie