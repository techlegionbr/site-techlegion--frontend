

import image1 from "@/assets/images/services/desenvolvimento-de-site.webp"
import image2 from "@/assets/images/services/design-grafico.webp"
import image3 from "@/assets/images/services/social-media.webp"
import Button from "@/components/Button"
import TitleSection from "@/components/TitleSection"
import { hostLinks } from "@/settings/links"

import Image from "next/image"


import * as S from "./styles"

const Services = (): JSX.Element => {
  return (
    <S.Services>
      <div className="content">
        <TitleSection
          subTitle="Serviços"
          title="Nossos Serviços"
        />
        <div className="services-cards">
          <div className="card">
            <div className="image-head">
              <Image priority src={image1} alt="image01" width={400} />
            </div>
            <div className="description">
              <h3>Desenvolvimento de Site</h3>
              <p>
                Potencialize seu negócio com um site único e impactante! Desenvolvimento profissional, design moderno,
                responsivo e otimizado para buscadores. Atraia mais clientes e alcance o sucesso online!
              </p>
              <Button className="button-know-more" href={hostLinks.services["desenvolvimento-de-site"]}>Saiba mais</Button>
            </div>
          </div>
          <div className="card">
            <div className="image-head">
              <Image priority src={image2} alt="image01" width={400} />
            </div>
            <div className="description">
              <h3>Design Gráfico</h3>
              <p>
                Impressione com design gráfico de qualidade! Logotipos, banners, materiais promocionais e muito mais.
                Destaque-se visualmente e conquiste seu público-alvo. Transforme sua marca com nossos serviços de design
                gráfico profissional!
              </p>
              <Button className="button-know-more" href={hostLinks.services["design-grafico"]}>Saiba mais</Button>
            </div>
          </div>
          <div className="card">
            <div className="image-head">
              <Image priority src={image3} alt="image01" width={400} />
            </div>
            <div className="description">
              <h3>Social Media</h3>
              <p>
                Conquiste as redes sociais! Gestão estratégica, conteúdo cativante e interações engajadoras.
                Aumente sua visibilidade, fortaleça sua marca e atinja resultados incríveis. Maximize seu potencial
                nas mídias sociais com nosso serviço de social media!
              </p>
              <Button className="button-know-more" href={hostLinks.services["social-media"]}>Saiba mais</Button>
            </div>
          </div>
        </div>
        <Button
          className="button-more-services"
          href="/services"
          iconRight={<i className='bx bxs-plus-circle'></i>}
          size="medium"
          hover="scale"
        >Ver mais serviços</Button>
      </div>
    </S.Services>
  )
}

export default Services