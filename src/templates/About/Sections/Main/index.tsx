import imageApresentation from "@/assets/images/about/team-young-cheerful-managers-sitting-couch-office-1024x1536.webp"
import imageCEOProfile from "@/assets/images/persons-profile/Leonardo-Ferraz.webp"
import Button from "@/components/Button"

import Image from "next/image"

import * as S from "./styles"

const Main = (): JSX.Element => {
  return (
    <S.Main>
      <div className="content">
        <div className="description-apresentation">
          <h4>Prezer, somos a</h4>
          <h1>Tech <span>Legion</span></h1>
          <p>
            Uma <strong>legião apaixonada por tecnologia</strong>, designers, gestores de marketing, analistas e cientistas de dados,
            engenheiros de software e desenvolvedores apaixonados por criar<strong> soluções digitais</strong> sob medida para nossos clientes.
          </p>
          <div className="profile-card">
            <div className="image-profile">
              <Image src={imageCEOProfile} alt="Leonardo Ferraz" width={60} />
            </div>
            <article>
              <h4>Leonardo Ferraz</h4>
              <small>CEO Tech Legion</small>
            </article>
          </div>
          <Button size="medium" className="button-contact">Entre em Contato</Button>
        </div>
        <div className="image-apresentation">
          <Image src={imageApresentation} alt="grupo de jovens alegres" width={300} />
        </div>
      </div>
    </S.Main>
  )
}

export default Main