import abbreviateName from "@/utils/abbreviateName"

import Image from "next/image"

import * as S from "./styles"

interface IProfileEditor {
  name: string,
  image: string
}

const ProfileEditor = ({ name, image }: IProfileEditor): JSX.Element => {
  return (
    <S.ProfileEditor>
      <div className="profile-img">
        <Image src={image} alt={name} width={70} height={70} />
      </div>
      <div className="profile-infos">
        <span>Publicado por</span>
        <span className="name">{abbreviateName(name)}</span>
      </div>
    </S.ProfileEditor>
  )
}


export default ProfileEditor