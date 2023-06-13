
import imagePersonsTract from "@/assets/images/home/sorrindo-retrato-de-um-homem-jovem-apertar-mao-scaled.webp"

import Image from "next/image"

import * as S from "./styles"

const Principles = (): JSX.Element => {
  return (
    <S.Principles>
      <div className="content">
        <div className="description-principles">
          <small>Nossa dedicação</small>
          <h3>
            A Tech Legion é dedicada a atender empresas de todos os portes, incluindo <strong>pequenas, médias e grandes empresas</strong>,
            bem como <strong>profissionais autônomos</strong> e <strong>empreendedores em geral</strong>.<br /> Nossa missão é <strong>impulsionar os resultados</strong> dos negócios
            digitais de nossos clientes, independentemente do <strong>tamanho ou setor</strong> em que atuam.
          </h3>
          <p>
            Onde a <strong>criatividade</strong> e a <strong>tecnologia</strong> se unem para atender <strong>negócios de todo o Brasil</strong> dos mais diversos segmentos.
            Sempre fazendo um trabalho pensando em que está do outro lado.
          </p>
        </div>
        <div className="image-principles">
          <Image src={imagePersonsTract} alt="Duas pessoas fechando o trato" width={300} />
        </div>
      </div>
    </S.Principles>
  )
}

export default Principles