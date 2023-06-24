

import Image from "next/image"

import * as S from "./styles"
import { type TypeVolunteer } from "./types"


interface PropsCardVolunteer {
  volunteer: TypeVolunteer
}

const CardVolunteer = ({ volunteer }: PropsCardVolunteer): JSX.Element => {
  const { image, links, name, office } = volunteer
  return (
    <S.CardVolunteer>
      <div className="layer-card">
        <div className="profile-image">
          <Image src={image} alt={name} width={60} height={60} />
        </div>
        <h4>{name}</h4>
        <h5>{office}</h5>
        <nav>
          {
            links.map((volunt, index) => (
              <a key={index} title={name} target="_blank" href={volunt.href} rel="noreferrer">{volunt.icon}</a>
            ))
          }
        </nav>
      </div>
    </S.CardVolunteer>
  )
}

export default CardVolunteer