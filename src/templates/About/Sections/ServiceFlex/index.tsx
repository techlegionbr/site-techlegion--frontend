import imageTransformDigital from "@/assets/images/about/woman-higher-education-teamwork-designer-folded-tech-legion-br.jpg"
import imageLegionSide from "@/assets/images/about/workers-preaparing-conversation-with-partners-office.jpg"
import imageServiceDemand from "@/assets/images/about/young-african-american-female-entrepreneur-freelancer-working-using-laptop-coworking-space.jpg"

import Image from "next/image"

import * as S from "./styles"

const ServiceFlex = (): JSX.Element => {
  return (
    <S.ServiceFlex>
      <div className="content">
        {/* <TitleSection
          subTitle="Traga seus Projetos Incríveis à Vida com a Tech Legion"
          title="Inovação Tecnológica e Personalizada"
        /> */}
        <article>
          <div className="image-article">
            <Image src={imageServiceDemand} alt="robo" />
          </div>
          <div className="description">
            <h1>Serviços Sob Demanda</h1>
            <p>
              Somos uma <strong>empresa de prestação de serviços sob demanda na área da tecnologia</strong>, que ajuda <strong>novos talentos</strong>,
              gerando oportunidades de trabalhar em projetos incríveis.
            </p>
            <p>
              A <strong>Tech Legion</strong> não é apenas uma empresa de tecnologia, mas sim uma <strong>legião de profissionais apaixonados pela
                tecnologia</strong>. O nosso propósito é simples: <strong>impactar a vida das pessoas através da tecnologia</strong>.
            </p>
          </div>
        </article>
        <article>
          <div className="description">
            <h1>Uma Legião Ao Seu Lado</h1>
            <p>
              Nosso slogan é <strong>“Uma legião ao seu lado”</strong>, porque além de sermos uma legião de apaixonados por tecnologia,
              acreditamos que o <strong>sucesso de nossos clientes é o nosso sucesso</strong>.
            </p>
          </div>
          <div className="image-article">
            <Image src={imageLegionSide} alt="robo" />
          </div>
        </article>
        <article>
          <div className="image-article">
            <Image src={imageTransformDigital} alt="robo" />
          </div>
          <div className="description">
            <h1>Transformação Digital</h1>
            <p>
              Estamos sempre animados para fazer parte da <strong>transformação digital</strong> de nossos futuros clientes.
              Se você busca um parceiro de confiança para ajudá-lo a alcançar seus objetivos de negócio por meio da
              tecnologia, conte conosco!<strong> Junte-se à nossa legião e vamos caminhar juntos para o sucesso</strong>.
            </p>
            <p>
              <strong>Oferecemos soluções personalizadas e inovadoras</strong> para as necessidades específicas de cada empresa.
              Desde o desenvolvimento de software até a hospedagem de projetos, nossa missão é fornecer o melhor
              serviço possível para nossos clientes. Se você precisa de ajuda para impulsionar seus negócios por
              meio da tecnologia, a <strong>Tech Legion</strong> é a escolha certa para você.
            </p>
          </div>
        </article>
      </div>
    </S.ServiceFlex>
  )
}

export default ServiceFlex