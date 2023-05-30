import imageFrinds from "@/assets/images/about/friends-having-crowded-party-home-tech-legion-br.jpg"
import imageMuitEthinics from "@/assets/images/about/multiethinics-technologie.png"
import Button from "@/components/Button"
import TitleSection from "@/components/TitleSection"


import Image from "next/image"

import * as S from "./styles"
const Values = (): JSX.Element => {
  return (
    <S.Values>
      <div className="content">
        <TitleSection
          subTitle="Confie em"
          title="Nossos Valores"
        />
        <ul className="list-values-card">
          <li>
            <i className='bx bxs-user-check'></i>
            <h3>Pessoas em<br />Primeiro lugar</h3>
          </li>
          <li>
            <i className='bx bxs-star'></i>
            <h3>Sonhar<br />grande</h3>
          </li>
          <li>
            <i className='bx bxs-group'></i>
            <h3>Prosperar<br />Juntos</h3>
          </li>
          <li>
            <i className='bx bx-male-female'></i>
            <h3>Atendimento<br />Humanizado</h3>
          </li>
          <li>
            <i className='bx bxs-trophy'></i>
            <h3>Ter ambição e<br />humildade</h3>
          </li>
        </ul>
        <div className="social-articles">
          <article>
            <div className="image-article">
              <Image src={imageMuitEthinics} alt="Jovens de diversas etinias" />
            </div>
            <div className="descriptio-article">
              <h2>Diversidade e Inclusão</h2>
              <p>
                Na Tech Legion, acreditamos que a diversidade e a inclusão são essenciais para impulsionar a inovação e
                o crescimento. Valorizamos e respeitamos as diferenças individuais, criando um ambiente acolhedor e
                inclusivo para todos. Estamos comprometidos em promover a equidade de oportunidades e garantir que cada
                voz seja ouvida. Juntos, estamos construindo um ambiente colaborativo.
              </p>
              <Button className="button-know-more">SAIBA MAIS</Button>
            </div>
          </article>
          <article>
            <div className="descriptio-article">
              <h2>Impacto Social</h2>
              <p>
                A Tech Legion não é apenas uma empresa de tecnologia, mas sim uma legião de profissionais apaixonados por
                tecnologia que buscam um propósito maior: impactar a vida das pessoas através da tecnologia.
              </p>
              <p>
                Ao contratar a Tech Legion, nossos clientes não estão apenas contratando serviços sob demanda na área da tecnologia,
                mas também estão contribuindo para o impacto social e econômico positivo na vida de profissionais em início de carreira.
              </p>
              <Button className="button-know-more">SAIBA MAIS</Button>
            </div>
            <div className="image-article">
              <Image src={imageFrinds} alt="Jovens de diversas etinias" />
            </div>
          </article>
        </div>
      </div>
    </S.Values>
  )
}

export default Values