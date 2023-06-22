import AccordionsCircle from "@/components/accordions/AccordionsCircle"
import TitleSection from "@/components/TitleSection"

import benefits from "./settings/benefits"
import * as S from "./styles"


const Benefits = (): JSX.Element => {
  return (
    <S.Benefits>
      <div className="content">
        <TitleSection
          subTitle="Veja os"
          title="Benefícios"
          description="Explore os benefícios exclusivos de cada serviço clicando na opção desejada."
        />
        <AccordionsCircle
          items={benefits}
        />
      </div>
    </S.Benefits>
  )
}


export default Benefits