import Button from "@/components/Button"

import * as S from "./styles"

const NotPermission = (): JSX.Element => {
  return (
    <S.NotPermission>
      <span className="error-number">Erro 401</span>
      <h1>Acesso não autorizado</h1>
      <p>Você não possui permissão para acessar esta página ou executar esta ação.</p>
      <Button className="btn-back-home" size="medium" href="/">Voltar para a página inicial</Button>
    </S.NotPermission>
  )
}

export default NotPermission