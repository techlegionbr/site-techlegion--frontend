
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
          A <b>Tech Legion</b> é uma empresa de <b>prestação de serviços sob demanda na área da tecnologia</b> que oferece soluções para
          ajudar pequenas e médias empresas e organizações a atingir seus objetivos de negócios.
        </p>
        <Button
          href="/"
          className="button-know-more"
          hover="transparent"
          size="medium"
        >Saiba mais</Button>
      </div>
    </S.About>
  )
}

export default About