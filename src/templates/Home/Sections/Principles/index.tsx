
import Image from "next/image"
import * as S from "./styles"
import imagePersonsTract from "@/assets/images/home/sorrindo-retrato-de-um-homem-jovem-apertar-mao-scaled.jpg"

const Principles = () => {
  return (
    <S.Principles>
      <div className="content">
        <div className="description-principles">
          <h5>Nossa dedicação</h5>
          <h2>
            A <span>Tech Legion</span> é dedicada a atender empresas de todos os portes, incluindo pequenas, médias e grandes empresas,
            bem como profissionais autônomos e empreendedores em geral. Nossa missão é <span>impulsionar os resultados dos negócios
              digitais</span> de nossos clientes, independentemente do tamanho ou setor em que atuam.
          </h2>
          <p>
            Onde a criatividade e a tecnologia se unem para atender negócios de todo o Brasil dos mais diversos segmentos.
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