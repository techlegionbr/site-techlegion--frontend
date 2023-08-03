import { AccordionsCircle } from "@/components/accordions"
import TitleSection from "@/components/TitleSection"

import benefits from "./settings/benefits"
import * as S from "./styles"

const Benefits = (): JSX.Element => {
  return (
    <S.Benefits>
      <div className="content">
        <TitleSection
          title="Benefícios"
          subTitle="Os melhores"
          description="Explore os benefícios exclusivos de cada serviço clicando na opção desejada."
        />
        <div className="benefits-accordions">
          <AccordionsCircle
            modeTheme="bluishGray"
            items={benefits}
          />
        </div>
      </div>
    </S.Benefits>
  )
}

export default Benefits