

import Image from "next/image"

import * as S from "./styles"

interface AlertNewEntitieProfileProps {
  src: string,
  alt: string
}

const AlertNewEntitieProfile = ({ src, alt }: AlertNewEntitieProfileProps): JSX.Element => {
  return (
    <S.AlertNewEntitieProfile>
      <Image src={src} alt={alt} width={70} height={70} />
    </S.AlertNewEntitieProfile>
  )
}

export default AlertNewEntitieProfile