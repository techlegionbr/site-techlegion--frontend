import imageFrinds from "@/assets/images/about/friends-having-crowded-party-home-tech-legion-br.webp"
import imageMuitEthinics from "@/assets/images/about/multiethinics-technologie.webp"
import Button from "@/components/Button"
import TitleSection from "@/components/TitleSection"
import { socialMediaLinks } from "@/settings/links"

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
            <i className='bx bxs-user'></i>
            <h4>Valorizando<br /> as Pessoas</h4>
          </li>
          <li>
            <i className='bx bxs-star'></i>
            <h4>Sonhar e<br /> Crescer</h4>
          </li>
          <li>
            <i className='bx bxs-cog'></i>
            <h4>Unidos <br /> para Prosperar</h4>
          </li>
          <li>
            <i className='bx bxs-heart'></i>
            <h4>Atendimento <br />Empático</h4>
          </li>
          <li>
            <i className='bx bx-male-female'></i>
            <h4>Inovação <br /> com Propósito</h4>
          </li>
          <li>
            <i className='bx bxs-medal'></i>
            <h4>Ambição <br /> e Humildade</h4>
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
              <Button href={socialMediaLinks.whatsapp} target="_blank" className="button-know-more" size="medium">Saiba Mais</Button>
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
              <Button href={socialMediaLinks.whatsapp} target="_blank" className="button-know-more" size="medium">Saiba Mais</Button>
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