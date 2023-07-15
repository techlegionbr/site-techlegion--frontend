import Image, { type StaticImageData } from "next/image"

import * as S from "./styles"

interface IProfileCardImageProps {
  src: string | StaticImageData,
  alt: string
}

const ProfileCardImage = ({ src, alt }: IProfileCardImageProps): JSX.Element => {
  return (
    <S.ProfileCardImage>
      <Image src={src} alt={alt} width={60} height={60} />
    </S.ProfileCardImage>
  )
}

export default ProfileCardImage