import Button from "@/components/Button"

import * as S from "./styles"

const PageNotPermission = (): JSX.Element => {
  return (
    <S.PageNotPermission>
      <span className="error-number">Erro 401</span>
      <h1>Acesso não autorizado</h1>
      <p>Você não possui permissão para acessar esta página ou executar esta ação.</p>
      <Button className="btn-back-home" size="medium" href="/">Voltar para a página inicial</Button>
    </S.PageNotPermission>
  )
}

export default PageNotPermission