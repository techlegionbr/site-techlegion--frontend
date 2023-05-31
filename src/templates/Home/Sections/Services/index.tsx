

import image1 from "@/assets/images/home/cards/desenvolvedor-de-software-pensando-enquanto-toca.jpg"
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