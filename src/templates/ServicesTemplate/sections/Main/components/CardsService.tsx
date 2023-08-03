import Button from "@/components/Button"

import * as S from "../styles"
import { type TypeService } from "../types"


interface PropsCardService {
  service: TypeService
}

const CardService = ({ service }: PropsCardService): JSX.Element => {
  const { description, icon, link, title } = service
  return (
    <S.CardService>
      <div className="circle-icon">
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <Button href={link} size="medium" className="button-know-more">Saiba Mais</Button>
    </S.CardService>
  )
}

interface PropsCardsService {
  services: TypeService[]
}

const CardsService = ({ services }: PropsCardsService): JSX.Element => {
  return (
    <S.CardsService>
      {
        services.map(service => (
          <CardService service={service} key={service.title} />
        ))
      }
    </S.CardsService>
  )
}

export default CardsService