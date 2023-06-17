
import Button from "@/components/Button"
import TitleSection from "@/components/TitleSection"

import * as S from "./styles"

const About = (): JSX.Element => {
  return (
    <S.About>
      <div className="content">
        <TitleSection
          subTitle="O que é a"
          title="Tech Legion"
        />
        <p>
          A Tech Legion é uma empresa de prestação de serviços sob demanda na área da tecnologia que oferece soluções para
          ajudar <strong>pequenas e médias empresas</strong> e <strong>organizações</strong> a atingir seus <strong>objetivos de negócios</strong>.
        </p>
        <Button
          href="/"
          className="button-know-more"
          size="medium"
        >Saiba mais</Button>
      </div>
    </S.About>
  )
}

export default About