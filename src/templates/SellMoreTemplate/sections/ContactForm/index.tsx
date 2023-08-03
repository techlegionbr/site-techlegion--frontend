import TitleSection from "@/components/TitleSection"
import FormContact from "@/patterns/Form/FormContact"

import * as S from "./styles"

const ContactForm = (): JSX.Element => {
  return (
    <S.ContactForm>
      <div className="content">
        <TitleSection
          title="Avance para o sucesso, expanda seus horizontes"
          subTitle="Kommo: A solução para impulsionar seu negócio além dos limites!"
          description="Preencha o formulário abaixo e receba atendimento no WhatsApp agora mesmo!"
        />
        <FormContact className="form-contact" />
      </div>
    </S.ContactForm>
  )
}

export default ContactForm