import AccordionsCircle from "@/components/accordions/AccordionsCircle"
import TitleSection from "@/components/TitleSection"

import benefits from "./settings/benefits"
import * as S from "./styles"


const Benefits = (): JSX.Element => {
  return (
    <S.Benefits>
      <div className="content">
        <TitleSection
          subTitle="Os melhores"
          title="Benefícios"
          description="Explore os benefícios exclusivos de cada serviço clicando na opção desejada."
        />
        <div className="benefits-accordions">
          <AccordionsCircle
            items={benefits}
          />
        </div>
      </div>
    </S.Benefits>
  )
}


export default Benefits