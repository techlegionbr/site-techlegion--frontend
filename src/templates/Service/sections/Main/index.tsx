import TitleSection from "@/components/TitleSection"

import Image from "next/image"

import * as S from "./styles"

interface PropsMain {
  service: {
    name: string,
    image: string,
    icon: React.ReactNode
  }
}

const Main = ({ service }: PropsMain): JSX.Element => {
  return (
    <S.Main>
      <div className="content">
        <TitleSection
          subTitle="Serviço"
          title={service.name}
        />
        <div className="image-service">
          <Image src={service.image} alt={`Imagem do serviço de ${service.name}`} width={600} height={400} />
          <span className="icon-service">
            {service.icon}
          </span>
        </div>
      </div>
    </S.Main>
  )
}

export default Main