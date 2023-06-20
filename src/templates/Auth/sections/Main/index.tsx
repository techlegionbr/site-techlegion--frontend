


import image from "@/assets/images/auth/chocado-homem-em-vr-oculos-protecao.webp"
import Alert from "@/components/alerts/Alert"
import Button from "@/components/Button"
import Input from "@/components/form/Input"
import LoaderDefault from "@/components/loaders/LoaderDefault"
import useLogin from "@/hooks/form/auth/useLogin"
import { color } from "@/styles/root"

import Image from "next/image"

import * as S from "./styles"

const Main = (): JSX.Element => {
  const { loginFormControl, loginFormErrors, loginInputControl, blockForm, alertLogin } = useLogin()
  return (
    <S.Main>
      <div className="content">
        <div className="card-login">
          <h2>Login</h2>
          <form {...loginFormControl}>
            <Input
              className="input-form"
              label="Email"
              error={!!loginFormErrors.email}
              helperText={loginFormErrors?.email?.message}
              disabled={blockForm}
              autoComplete="off"
              {...loginInputControl("email")}
            />
            <Input
              className="input-form"
              label="Senha"
              type="password"
              error={!!loginFormErrors.password}
              disabled={blockForm}
              helperText={loginFormErrors?.password?.message}
              {...loginInputControl("password")}
            />
            <div className="btn-container-form">
              <Button disabled={blockForm}>{blockForm ? "FAZENDO LOGIN..." : "FAÇA SEU LOGIN"}</Button>
              <LoaderDefault show={blockForm} />
            </div>
          </form>
        </div>
        <div className="image-form">
          <Image src={image} alt="Imagem Reconhecimento Facial" width={400} />
        </div>
      </div>
      <Alert
        helperText={{
          main: alertLogin.helperText.main,
          sup: alertLogin.helperText.sup
        }}
        iconLeft={(
          alertLogin.status === "error" ? <i className='bx bxs-error' style={{ color: color.alert }}></i> :
            <i className='bx bxs-check-circle' style={{ color: color.third }}></i>
        )}
        show={alertLogin.show}
        onClose={alertLogin.onClose}
      />
    </S.Main>
  )
}

export default Main