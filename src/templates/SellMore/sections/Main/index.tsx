
import imageMainKommo from "@/assets/images/seellMore/kommo-caixa-de-entrada-conversa-medio.webp"
import Button from "@/components/Button"

import Image from "next/image"

import * as S from "./styles"
const Main = (): JSX.Element => {
  return (
    <S.Main>
      <div className="content">
        <div className="description-apresentation">
          <h1>O nosso compromisso é fazer o seu negócio vender mais</h1>
          <p>Você está preparado para transformar seu resultado digital em vendas? Se a resposta for sim, não perca tempo e entre em contato imediatamente.</p>
          <Button className="btn-sell-more" size="medium" iconRight={<i className='bx bxs-dollar-circle'></i>}>Quero Vender Mais</Button>
        </div>
        <div className="image-apresentation">
          <Image src={imageMainKommo} alt="image-kommo" width={400} priority />
        </div>
      </div>
    </S.Main>
  )
}


export default Main