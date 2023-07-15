import Button from "@/components/Button"
import { Form } from "@/components/Form"
import useContact from "@/hooks/form/useContact"
import { socialMediaLinks } from "@/settings/links"


import * as S from "./styles"

interface IFormContactProps {
  className?: string
}

const FormContact = ({ className }: IFormContactProps): JSX.Element => {
  const { errors, formControl, register } = useContact()

  return (
    <S.FormContact className={className} {...formControl} >
      <div className="pop-up-troll">
        <div className="card">
          <span className="title">Esqueça <del>formulários</del> cansativos.<br /> Automatize tudo e transforme sua vida!</span>
          <Button preventDefault target="_blank" className="btn-contact" size="medium" href={socialMediaLinks.whatsapp}>Vamos conversar pelo whatsapp</Button>
        </div>
      </div>
      <Form.Input
        id="input-name"
        placeholder="Nome"
        error={!!errors.name}
        helperText={errors.name?.message}
        {...register("name")}
      />
      <Form.Input
        id="input-email"
        placeholder="Email"
        error={!!errors.email}
        helperText={errors.email?.message}
        {...register("email")}
      />
      <Form.Input
        id="input-whatsapp"
        placeholder="WhatsApp"
        error={!!errors.whatsapp}
        helperText={errors.whatsapp?.message}
        mask="(99) 9999-99999"
        {...register("whatsapp")}
      />
      <Form.Textarea
        id="textarea-message"
        placeholder="Mensagem"
        error={!!errors.message}
        helperText={errors.message?.message}
        {...register("message")}
      />
      <Button iconRight={<i className='bx bxs-message'></i>} className="button-form">ENVIAR</Button>
    </S.FormContact>
  )
}

export default FormContact