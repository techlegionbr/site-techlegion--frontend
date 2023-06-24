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
            Uma legião apaixonada por <strong>tecnologia</strong>, <strong>designers</strong>, <strong>gestores de marketing</strong>, <strong>analistas e cientistas de dados</strong>,
            <strong>engenheiros de software</strong> e <strong>desenvolvedores</strong> apaixonados por criar soluções digitais sob medida para nossos clientes.
          </p>
          <div className="profile-card">
            <div className="image-profile">
              <Image src={imageCEOProfile} alt="Leonardo Ferraz" width={60} height={60} priority />
            </div>
            <article>
              <h4>Leonardo Ferraz</h4>
              <small>CEO Tech Legion</small>
            </article>
          </div>
          <Button size="medium" className="button-contact">Entre em Contato</Button>
        </div>
        <div className="image-apresentation">
          <Image src={imageApresentation} alt="grupo de jovens alegres" width={300} priority />
        </div>
      </div>
    </S.Main>
  )
}

export default Main