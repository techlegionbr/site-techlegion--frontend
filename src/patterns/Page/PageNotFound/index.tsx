import Button from "@/components/Button"

import * as S from "./styles"

const PageNotFound = (): JSX.Element => {
  return (
    <S.PageNotFound>
      <span className="error-number">Erro 404</span>
      <h1>Página não encontrada</h1>
      <p>A página que você está procurando não pôde ser encontrada.<br /> Verifique se o URL está correto ou retorne à página inicial.</p>
      <Button className="btn-back-home" size="medium" href="/">Voltar para a página inicial</Button>
    </S.PageNotFound>
  )
}

export default PageNotFound