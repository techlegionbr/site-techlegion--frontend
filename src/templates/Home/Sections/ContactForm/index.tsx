import Button from "@/components/Button"
import Input from "@/components/form/Input"
import Textarea from "@/components/form/Textarea"
import TitleSection from "@/components/TitleSection"
import useContact from "@/hooks/form/auth/useContact"

import * as S from "./styles"

const ContactForm = (): JSX.Element => {
  const { contactFormControl, contactFormErrors, contactInputControl } = useContact()
  return (
    <S.ContactForm>
      <div className="content">
        <TitleSection
          subTitle="Vamos inpulsionar o seu negócio?"
          title="Entre em Contato"
          description="Preencha o formulário abaixo e descubra como podemos impulsionar o seu negócio através dos nossos serviços tecnológicos."
        />
        <form {...contactFormControl}>
          <Input
            className="input-contact"
            {...contactInputControl("name")}
            placeholder="Nome"
            id="input-name"
            error={!!contactFormErrors.name}
            helperText={contactFormErrors.name?.message}
          />
          <Input
            className="input-contact"
            {...contactInputControl("email")}
            placeholder="Email"
            id="input-email"
            error={!!contactFormErrors.email}
            helperText={contactFormErrors.email?.message}
          />
          <Textarea
            className="input-contact"
            {...contactInputControl("message")}
            placeholder="Mensagem"
            id="textarea-message"
            error={!!contactFormErrors.message}
            helperText={contactFormErrors.message?.message}
          />

          <Button className="button-submit">Enviar</Button>
        </form>
      </div>
    </S.ContactForm>
  )
}

export default ContactForm