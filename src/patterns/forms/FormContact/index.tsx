import Button from "@/components/Button"
import Input from "@/components/form/Input"
import Textarea from "@/components/form/Textarea"
import useContact from "@/hooks/form/useContact"

import * as S from "./styles"

interface IFormContactProps {
  className?: string
}

const FormContact = ({ className }: IFormContactProps): JSX.Element => {
  const { errors, formControl, register } = useContact()

  return (
    <S.FormContact className={className} {...formControl} >
      <Input
        id="input-name"
        placeholder="Nome"
        error={!!errors.name}
        helperText={errors.name?.message}
        {...register("name")}
      />
      <Input
        id="input-email"
        placeholder="Email"
        error={!!errors.email}
        helperText={errors.email?.message}
        {...register("email")}
      />
      <Input
        id="input-whatsapp"
        placeholder="WhatsApp"
        error={!!errors.whatsapp}
        helperText={errors.whatsapp?.message}
        mask="(99) 9999-99999"
        {...register("whatsapp")}
      />
      <Textarea
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