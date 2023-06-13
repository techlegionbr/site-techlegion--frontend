import imageFrinds from "@/assets/images/about/friends-having-crowded-party-home-tech-legion-br.webp"
import imageMuitEthinics from "@/assets/images/about/multiethinics-technologie.webp"
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
            <h4>Pessoas em<br />Primeiro lugar</h4>
          </li>
          <li>
            <i className='bx bxs-star'></i>
            <h4>Sonhar<br />grande</h4>
          </li>
          <li>
            <i className='bx bxs-group'></i>
            <h4>Prosperar<br />Juntos</h4>
          </li>
          <li>
            <i className='bx bx-male-female'></i>
            <h4>Atendimento<br />Humanizado</h4>
          </li>
          <li>
            <i className='bx bxs-trophy'></i>
            <h4>Ter ambição e<br />humildade</h4>
          </li>
        </ul>
        <div className="social-articles">
          <article id="diversidade-e-inclusao">
            <div className="image-article">
              <Image
                src={imageMuitEthinics}
                alt="Jovens de diversas etinias"
                width={400}
              />
            </div>
            <div className="descriptio-article">
              <h2>Diversidade e Inclusão</h2>
              <p>
                Na Tech Legion, acreditamos que a <strong>diversidade</strong> e a <strong>inclusão</strong> são essenciais para impulsionar a inovação e
                o crescimento. Valorizamos e respeitamos as <strong>diferenças individuais</strong>, criando um ambiente acolhedor e
                inclusivo para todos. Estamos comprometidos em promover a <strong>equidade de oportunidades</strong> e garantir que cada
                voz seja ouvida. Juntos, estamos construindo um ambiente <strong>colaborativo</strong>.
              </p>
              <Button className="button-know-more">SAIBA MAIS</Button>
            </div>
          </article>
          <article id="impacto-social">
            <div className="descriptio-article">
              <h2>Impacto Social</h2>
              <p>
                A Tech Legion não é apenas uma empresa de tecnologia, mas sim uma <strong>legião de profissionais apaixonados por
                  tecnologia</strong> que buscam um propósito maior: <strong>impactar a vida das pessoas através da tecnologia</strong>
              </p>
              <p>
                Ao contratar a Tech Legion, nossos clientes não estão apenas contratando <strong>serviços sob demanda na área da tecnologia</strong>,
                mas também estão contribuindo para o <strong>impacto social e econômico positivo</strong> na vida de <strong>profissionais em
                  início de carreira</strong>
              </p>
              <Button className="button-know-more">SAIBA MAIS</Button>
            </div>
            <div className="image-article">
              <Image
                src={imageFrinds}
                alt="Jovens de diversas etinias"
                width={400}
              />
            </div>
          </article>
        </div>
      </div>
    </S.Values>
  )
}

export default Values