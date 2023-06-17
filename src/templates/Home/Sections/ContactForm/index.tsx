import Button from "@/components/Button"
import TitleSection from "@/components/TitleSection"

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
        <form>
          <input id="name" placeholder="Nome" />
          <input id="email" placeholder="E-mail" />
          <textarea id="message" placeholder="Mensagem" />
          <Button className="button-submit">Enviar</Button>
        </form>
      </div>
    </S.ContactForm>
  )
}

export default ContactForm