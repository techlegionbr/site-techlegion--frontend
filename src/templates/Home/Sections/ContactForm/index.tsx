import TitleSection from "@/components/TitleSection"
import * as S from "./styles"

const ContactForm = () => {
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
          <button className="button-submit">Enviar</button>
        </form>
      </div>
    </S.ContactForm>
  )
}

export default ContactForm