


import Button from "@/components/Button"
import Input from "@/components/form/Input"
import useLogin from "@/hooks/auth/useLogin"
import useRegister from "@/hooks/auth/useRegister"

import * as S from "./styles"

const Main = (): JSX.Element => {
  const { registerFormControl, registerInputControl, registerFormErrors } = useRegister()
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
            <Button className="btn-form">Faça seu login</Button>
          </form>
        </div>
        <div className="line-vertical" />
        <div className="card-register">
          <h2>Registro</h2>
          <form {...registerFormControl}>
            <Input
              className="input-form"
              placeholder="Email"
              type="email"
              error={!!registerFormErrors.email}
              helperText={registerFormErrors?.email?.message}
              autoComplete="off"
              {...registerInputControl("email")}
            />
            <Input
              className="input-form"
              placeholder="Código"
              error={!!registerFormErrors.code}
              helperText={registerFormErrors?.code?.message}
              autoComplete="off"
              {...registerInputControl("code")}
            />
            <Input
              className="input-form"
              placeholder="Senha"
              type="password"
              error={!!registerFormErrors.password}
              helperText={registerFormErrors?.password?.message}
              {...registerInputControl("password")}
            />
            <Button className="btn-form">Faça seu registro</Button>
          </form>
        </div>
      </div>
    </S.Main>
  )
}

export default Main