import TitleSection from "@/components/TitleSection"

import benefits from "./benefits"
import AccordionsBenefitService from "./components/AccordionsBenefitService"
import * as S from "./styles"


const Benefits = (): JSX.Element => {
  return (
    <S.Benefits>
      <div className="content">
        <TitleSection
          subTitle="Veja os"
          title="Benefícios"
          description="Clique no serviço escolhido para ver seu respectivo benefício."
        />
        <AccordionsBenefitService
          benefits={benefits}
        />
      </div>
    </S.Benefits>
  )
}


export default Benefits