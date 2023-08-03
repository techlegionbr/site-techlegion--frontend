
import { useRef } from "react"

import logoPrimeiraVaga from "@/assets/images/logos/primeira-vaga-logo.webp"
import logoRealTurismos from "@/assets/images/logos/real-turismo-logo.webp"
import logoBrecho from "@/assets/images/logos/recicla-se-brecho-logo.webp"
import LegendItem from "@/components/LegendItem"
import TitleSection from "@/components/TitleSection"
import { socialMediaLinks } from "@/settings/links"

import Image from "next/image"


import * as S from "./styles"

const Clients = (): JSX.Element => {
  const carouselRef = useRef<HTMLUListElement | null>(null)

  return (
    <S.Clients>
      <div className="content">
        <TitleSection
          title="Nossos Clientes"
          subTitle="Acreditaram em nossa Legião "
        />
        <ul className="logo-client-list" ref={carouselRef}>
          <LegendItem legend="Real Turismo e Locações">
            <li>
              <i className='bx bxs-crown icon-crown' ></i>
              <a>
                <Image src={logoRealTurismos} alt={"Real Turismos"} width={90} height={90} />
              </a>
            </li>
          </LegendItem>
          <LegendItem legend="Recicle-se Brecho e Beleza">
            <li>
              <i className='bx bxs-crown icon-crown' ></i>
              <a>
                <Image src={logoBrecho} alt={"Real Turismos"} width={90} height={90} />
              </a>
            </li>
          </LegendItem>
          <LegendItem legend="Primeira Vaga">
            <li>
              <i className='bx bxs-crown icon-crown' ></i>
              <a href="https://primeiravaga.tech/" target="_blank" rel="noreferrer" title="Primeira Vaga">
                <Image src={logoPrimeiraVaga} alt={"Real Turismos"} width={90} height={90} />
              </a>
            </li>
          </LegendItem>
        </ul>

      </div>
      <a className="invitation-link" href={socialMediaLinks.whatsapp} target="blank" title="Entre em contato conosco!">Quer fazer parte disso também? <br /> Entre em contato conosco!</a>
    </S.Clients>
  )
}

export default Clients