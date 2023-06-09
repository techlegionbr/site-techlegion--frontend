
import Button from "@/components/Button"
import Input from "@/components/form/Input"

import * as S from "./styles"

const Main = (): JSX.Element => {
  return (
    <S.Main>
      <div className="content">
        <div className="card-login">
          <h2>Login</h2>
          <form>
            <Input
              className="input-form"
              placeholder="Email"
              name="email"
            />
            <Input
              className="input-form"
              placeholder="Senha"
              name="password"
              type="password"
            />
            <Button className="btn-form">Faça seu login</Button>
          </form>
        </div>
        <div className="line-vertical" />
        <div className="card-register">
          <h2>Registro</h2>
          <form>
            <Input
              className="input-form"
              placeholder="Email"
              name="email"
            />
            <Input
              className="input-form"
              placeholder="Código"
              name="code"
            />
            <Input
              className="input-form"
              placeholder="Senha"
              type="password"
              name="password"
            />
            <Input
              className="input-form"
              placeholder="Confirmar senha"
              name="password-confirm"
            />
            <Button className="btn-form">Faça seu registro</Button>
          </form>
        </div>
      </div>
    </S.Main>
  )
}

export default Main