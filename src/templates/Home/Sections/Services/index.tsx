

import imageDevelopementWebSite from "@/assets/images/services/desenvolvimento-de-site.webp"
import imageDesignerGraphic from "@/assets/images/services/design-grafico.webp"
import imageSocialMedia from "@/assets/images/services/social-media.webp"
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
              <Image
                priority
                src={imageDevelopementWebSite}
                alt="imagem do serviço de Desenvolvimento de Site"
                width={400}
              />
            </div>
            <div className="description">
              <h3>Desenvolvimento de Site</h3>
              <p>
                Potencialize seu negócio com um site único e impactante! Desenvolvimento profissional, design moderno,
                responsivo e <strong>otimizado para buscadores</strong>. Atraia mais clientes e alcance o sucesso online!
              </p>
              <Button className="button-know-more" href={hostLinks.services["desenvolvimento-de-site"]}>Saiba mais</Button>
            </div>
          </div>
          <div className="card">
            <div className="image-head">
              <Image
                priority
                src={imageDesignerGraphic}
                alt="imagem do serviço de Designer Gráfico"
                width={400}
              />
            </div>
            <div className="description">
              <h3>Design Gráfico</h3>
              <p>
                Impressione com <strong>design gráfico de qualidade</strong>! <strong>Logotipos</strong>, <strong>banners</strong>, <strong>materiais promocionais</strong> e muito mais.
                Destaque-se visualmente e conquiste seu público-alvo. Transforme sua marca com nossos serviços de <strong>design
                  gráfico profissional</strong>!
              </p>
              <Button className="button-know-more" href={hostLinks.services["design-grafico"]}>Saiba mais</Button>
            </div>
          </div>
          <div className="card">
            <div className="image-head">
              <Image
                priority
                src={imageSocialMedia}
                alt="imagem do serviço de Social Media"
                width={400}
              />
            </div>
            <div className="description">
              <h3>Social Media</h3>
              <p>
                Conquiste as redes sociais! <strong>Gestão estratégica</strong>, <strong>conteúdo cativante</strong> e <strong>interações engajadoras</strong>.
                Aumente sua visibilidade, fortaleça sua marca e atinja resultados incríveis.<strong> Maximize seu potencial</strong>
                nas mídias sociais com nosso serviço de social media!
              </p>
              <Button className="button-know-more" href={hostLinks.services["social-media"]}>Saiba mais</Button>
            </div>
          </div>
        </div>
        <Button
          className="button-more-services"
          href={hostLinks.main.servicos}
          iconRight={<i className='bx bxs-plus-circle'></i>}
          size="medium"
          hover="scale"
        >Ver mais serviços</Button>
      </div>
    </S.Services>
  )
}

export default Services