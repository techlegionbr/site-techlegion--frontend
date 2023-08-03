import TitleSection from "@/components/TitleSection"

import CardsService from "./components/CardsService"
import services from "./settings/services"
import * as S from "./styles"


const Main = (): JSX.Element => {
  return (
    <S.Main>
      <div className="content">
        <TitleSection
          subTitle="Conheça mais sobre os"
          title="Nossos Serviços"
          description="A Tech Legion oferece soluções personalizadas e inovadoras, desde desenvolvimento de software até hospedagem de projetos, impulsionando seus negócios com excelência tecnológica."
        />
        <CardsService
          services={services}
        />
      </div>
    </S.Main>
  )
}

export default Main