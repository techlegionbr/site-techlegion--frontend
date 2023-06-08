

import image2 from "@/assets/images/home/cards/engenheira-trabalhando-tarde-da-noite-em-um-modelo-3d-de-turbina-industrial-enquanto-bebia-cafe-na-frente-do-computador.jpg"
import image1 from "@/assets/images/home/cards/homem-afro-americano-trabalhando-em-computador-criado-com-tecnologia-generative-ai.jpg"
import image3 from "@/assets/images/home/cards/medio-tiro-mulher-segura-smartphone.jpg"
import Button from "@/components/Button"
import TitleSection from "@/components/TitleSection"

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
              <h2>Desenvolvimento de Site</h2>
              <p>
                Potencialize seu negócio com um site único e impactante! Desenvolvimento profissional, design moderno,
                responsivo e otimizado para buscadores. Atraia mais clientes e alcance o sucesso online!
              </p>
              <Button className="button-know-more" href="/services">Saiba mais</Button>
            </div>
          </div>
          <div className="card">
            <div className="image-head">
              <Image priority src={image2} alt="image01" width={400} />
            </div>
            <div className="description">
              <h2>Design Gráfico</h2>
              <p>
                Impressione com design gráfico de qualidade! Logotipos, banners, materiais promocionais e muito mais.
                Destaque-se visualmente e conquiste seu público-alvo. Transforme sua marca com nossos serviços de design
                gráfico profissional!
              </p>
              <Button className="button-know-more" href="/services">Saiba mais</Button>
            </div>
          </div>
          <div className="card">
            <div className="image-head">
              <Image priority src={image3} alt="image01" width={400} />
            </div>
            <div className="description">
              <h2>Social Media</h2>
              <p>
                Conquiste as redes sociais! Gestão estratégica, conteúdo cativante e interações engajadoras.
                Aumente sua visibilidade, fortaleça sua marca e atinja resultados incríveis. Maximize seu potencial
                nas mídias sociais com nosso serviço de social media!
              </p>
              <Button className="button-know-more" href="/services">Saiba mais</Button>
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