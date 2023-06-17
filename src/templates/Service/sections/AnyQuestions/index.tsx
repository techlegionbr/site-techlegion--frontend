import Button from "@/components/Button"
import TitleSection from "@/components/TitleSection"

import * as S from "./styles"

const AnyQuestions = (): JSX.Element => {
  return (
    <S.AnyQuestions>
      <div className="content">
        <TitleSection
          subTitle="Entre em contato"
          title="Ficou com alguma dúvida?"
          description="Se você tem alguma dúvida, qualquer que seja, pode falar direto no WhatsApp. É só chamar, que você terá sua resposta."
        />
        <Button className="button-contact" size="medium">Conversar pelo Whatsapp</Button>
      </div>
    </S.AnyQuestions>
  )
}

export default AnyQuestions