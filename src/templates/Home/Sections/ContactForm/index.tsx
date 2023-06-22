import Button from "@/components/Button"
import Input from "@/components/form/Input"
import Textarea from "@/components/form/Textarea"
import TitleSection from "@/components/TitleSection"
import useContact from "@/hooks/form/useContact"

import * as S from "./styles"

const ContactForm = (): JSX.Element => {
  const { errors, formControl, register } = useContact()
  return (
    <S.ContactForm>
      <div className="content">
        <TitleSection
          subTitle="Vamos inpulsionar o seu negócio?"
          title="Entre em Contato"
          description="Preencha o formulário abaixo e descubra como podemos impulsionar o seu negócio através dos nossos serviços tecnológicos."
        />
        <form {...formControl}>
          <Input
            className="input-contact"
            {...register("name")}
            placeholder="Nome"
            id="input-name"
            error={!!errors.name}
            helperText={errors.name?.message}
          />
          <Input
            className="input-contact"
            {...register("email")}
            placeholder="Email"
            id="input-email"
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <Textarea
            className="input-contact"
            {...register("message")}
            placeholder="Mensagem"
            id="textarea-message"
            error={!!errors.message}
            helperText={errors.message?.message}
          />

          <Button className="button-submit">Enviar</Button>
        </form>
      </div>
    </S.ContactForm>
  )
}

export default ContactForm