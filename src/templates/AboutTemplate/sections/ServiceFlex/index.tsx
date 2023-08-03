import imageTransformDigital from "@/assets/images/about/woman-higher-education-teamwork-designer-folded-tech-legion-br.webp"
import imageLegionSide from "@/assets/images/about/workers-preaparing-conversation-with-partners-office.webp"
import imageServiceDemand from "@/assets/images/about/young-african-american-female-entrepreneur-freelancer-working-using-laptop-coworking-space.webp"

import Image from "next/image"

import * as S from "./styles"

const ServiceFlex = (): JSX.Element => {
  return (
    <S.ServiceFlex>
      <div className="content">
        <article>
          <div className="image-article">
            <Image
              src={imageServiceDemand}
              alt="Imagem representativa para Serviços Sob Demanda"
              width={400}
            />
          </div>
          <div className="description">
            <h2>Serviços Sob Demanda</h2>
            <p>
              Somos uma empresa de prestação de serviços sob demanda na área da <strong>tecnologia</strong>, que ajuda novos talentos,
              gerando oportunidades de trabalhar em <strong>projetos incríveis</strong>.
            </p>
            <p>
              A Tech Legion não é apenas uma empresa de tecnologia, mas sim uma <strong>legião de profissionais apaixonados</strong> pela
              tecnologia. O nosso propósito é simples: <strong>impactar a vida das pessoas através da tecnologia</strong>.
            </p>
          </div>
        </article>
        <article>
          <div className="description">
            <h2>Uma Legião Ao Seu Lado</h2>
            <p>
              Nosso slogan é “Uma legião ao seu lado”, porque além de sermos uma <strong>legião de apaixonados por tecnologia</strong>,
              acreditamos que o sucesso de nossos clientes é o nosso sucesso.
            </p>
          </div>
          <div className="image-article">
            <Image
              src={imageLegionSide}
              alt="Imagem representativa para apresentação da Tech Legion"
              width={400}
            />
          </div>
        </article>
        <article>
          <div className="image-article">
            <Image
              src={imageTransformDigital}
              alt="Imagem representativa para Transformação Digital"
              width={400}
            />
          </div>
          <div className="description">
            <h2>Transformação Digital</h2>
            <p>
              Estamos sempre animados para fazer parte da transformação digital de nossos futuros clientes.
              Se você busca um parceiro de confiança para ajudá-lo a alcançar seus <strong>objetivos de negócio</strong> por meio da
              tecnologia, conte conosco!
            </p>
            <p>
              Oferecemos soluções <strong>personalizadas</strong> e <strong>inovadoras</strong> para as necessidades específicas de cada empresa.
              Desde o <strong>desenvolvimento de software</strong> até a <strong>hospedagem de projetos</strong>, nossa missão é fornecer o melhor
              serviço possível para nossos clientes.
            </p>
          </div>
        </article>
      </div>
    </S.ServiceFlex>
  )
}

export default ServiceFlex