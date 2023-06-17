


import image from "@/assets/images/auth/conceito-de-colagem-de-reconhecimento-facial.jpg"
import Button from "@/components/Button"
import Input from "@/components/form/Input"
import useLogin from "@/hooks/auth/useLogin"


import Image from "next/image"

import * as S from "./styles"

const Main = (): JSX.Element => {
  const { loginFormControl, loginFormErrors, loginInputControl } = useLogin()

  return (
    <S.Main>
      <div className="content">
        <div className="card-login">
          <h2>Login</h2>
          <form {...loginFormControl}>
            <Input
              className="input-form"
              placeholder="Email"
              type="email"
              error={!!loginFormErrors.email}
              helperText={loginFormErrors?.email?.message}
              autoComplete="off"
              {...loginInputControl("email")}
            />
            <Input
              className="input-form"
              placeholder="Senha"
              type="password"
              error={!!loginFormErrors.password}
              helperText={loginFormErrors?.password?.message}
              {...loginInputControl("password")}
            />
            <Button className="btn-form">FAÇA SEU LOGIN</Button>
          </form>
        </div>
        <div className="image-form">
          <Image src={image} alt="Imagem Reconhecimento Facial" width={400} />
        </div>
      </div>
    </S.Main>
  )
}

export default Main