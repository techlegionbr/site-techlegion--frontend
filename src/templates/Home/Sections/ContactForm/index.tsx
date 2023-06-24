
import TitleSection from "@/components/TitleSection"
import FormContact from "@/patterns/forms/FormContact"

import * as S from "./styles"

const ContactForm = (): JSX.Element => {
  return (
    <S.ContactForm>
      <div className="content">
        <TitleSection
          subTitle="Vamos inpulsionar o seu negócio?"
          title="Entre em Contato"
          description="Preencha o formulário abaixo e descubra como podemos impulsionar o seu negócio através dos nossos serviços tecnológicos."
        />
        <FormContact className="form-contact" />
      </div>
    </S.ContactForm>
  )
}

export default ContactForm