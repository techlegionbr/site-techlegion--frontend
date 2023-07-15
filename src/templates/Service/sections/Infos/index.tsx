

import AccordionsQuest from "@/components/accordions/AccordionsQuest"
import Button from "@/components/Button"
import { socialMediaLinks } from "@/settings/links"

import { type TypeService } from "../../types"
import * as S from "./styles"

interface PropsInfos {
  service: Omit<TypeService, "name" | "image" | "icon">
}

const Infos = ({ service }: PropsInfos): JSX.Element => {

  const beniftsTrated = (text: string): React.ReactElement | string => {
    const benefitDivided = text.split(":")
    const [benefit, benefitDescription] = benefitDivided
    if (benefitDivided.length >= 2) {
      return (
        <>
          <strong>{`${benefit}:`}</strong>
          {benefitDescription}
        </>
      )
    } else {
      return text
    }
  }

  return (
    <S.Infos>
      <div className="content">
        <div className="introduction">
          <article>
            <h1>Introdução</h1>
            <p>
              {service.introduction}
            </p>
          </article>
          <article>
            <h1>Benefícios</h1>
            <ul className="benefits">
              {
                service.benefits.map((benef, index) => (
                  <li key={index}>
                    <p>
                      {beniftsTrated(benef)}
                    </p>
                  </li>
                ))
              }
            </ul>
          </article>
          <article>
            <h1>Perguntas Frequentes</h1>
            <AccordionsQuest items={service.commonQuestions} />
          </article>
        </div>
        <div className="price-card">
          <article>
            <h4>Investimento Acessível</h4>
            <p>
              Nossa legião é composta por profissionais em início de carreira e, por esse motivo, visando o avanço de carreira desses novos
              talentos, podemos oportunizar o investimento mais acessível para os nossos clientes.
            </p>
          </article>
          <div className="price">
            <span className="sub-price">A partir de</span>
            <span className="price-value">R$ {String(service.value).replace(".", ",")}</span>
            <Button target="_blank" href={socialMediaLinks.whatsapp} className="button-contract" size="medium">Contratar Serviço</Button>
          </div>
          <div className="included-service">
            <h4>Nossos serviços incluem:</h4>
            <ul>
              <li>
                <i className='bx bx-support'></i>
                <span>Suporte técnico e <br />personalizado</span>
              </li>
              <li>
                <i className='bx bxs-offer' ></i>
                <span>Descontos em serviços <br />adicionais</span>
              </li>
              <li>
                <i className='bx bxs-cog' ></i>
                <span>Suporte técnico e <br />personalizado</span>
              </li>
            </ul>
          </div>
          <div className="differentials">
            <h4>Diferenciais:</h4>
            <ul>
              <li>Atendimento Personalizado</li>
              <li>Comprometimento</li>
              <li>Atendimento Personalizado</li>
              <li>Atendimento Personalizado</li>
            </ul>
          </div>
        </div>
      </div>
    </S.Infos>
  )
}

export default Infos