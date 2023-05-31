import Button from "@/components/Button"
import TitleSection from "@/components/TitleSection"

import * as S from "./styles"

const YourMoment = (): JSX.Element => {
  return (
    <S.YourMoment>
      <div className="content">
        <TitleSection
          subTitle="Entre em contato"
          title="Seu Momento"
        />
        <div className="description-contact">
          <h3>Chegou a hora de profissionalizar seu negócio!</h3>
          <p>
            Mande uma mensagem para conseguirmos entender o seu momento digital e avaliarmos como podemos te ajudar!
          </p>
          <Button className="button-contact">Entrar em Contato</Button>
        </div>
      </div>
    </S.YourMoment>
  )
}

export default YourMoment