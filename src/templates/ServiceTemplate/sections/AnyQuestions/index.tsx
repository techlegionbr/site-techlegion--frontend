import Button from "@/components/Button"
import TitleSection from "@/components/TitleSection"
import { socialMediaLinks } from "@/settings/links"

import * as S from "./styles"

interface IAnyQuestionsProps {
  bgColor: "primary" | "bluishGray"
}


const AnyQuestions = ({ bgColor }: IAnyQuestionsProps): JSX.Element => {
  return (
    <S.AnyQuestions bgColor={bgColor}>
      <div className="content">
        <TitleSection
          subTitle="Entre em contato"
          title="Ficou com alguma dúvida?"
          description="Se você tem alguma dúvida, qualquer que seja, pode falar direto no WhatsApp. É só chamar, que você terá sua resposta."
        />
        <Button target="_blank" href={socialMediaLinks.whatsapp} className="button-contact" size="medium">Conversar pelo Whatsapp</Button>
      </div>
    </S.AnyQuestions>
  )
}

export default AnyQuestions