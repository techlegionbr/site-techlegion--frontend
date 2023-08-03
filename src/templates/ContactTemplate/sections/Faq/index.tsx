import TitleSection from "@/components/TitleSection"

import * as S from "./styles"

const Faq = (): JSX.Element => {
  return (
    <S.Faq>
      <div className="content">
        <TitleSection
          subTitle="Nossas"
          title="Perguntas Frequentes"
        />
        <div className="comon-questions">
          <div className="question">
            <h4>Vocês trabalham apenas com empresas ou também atendem a clientes individuais?</h4>
            <p>A Tech Legion atende tanto empresas quanto clientes individuais. Nossos serviços são adaptados para atender às necessidades de diversos segmentos e tamanhos de negócio.</p>
          </div>
          <div className="question">
            <h4>Quais são as formas de pagamento aceitas pela Tech Legion?</h4>
            <p>Aceitamos pagamentos por transferência bancária, cartões de crédito/débito e outras formas de pagamento. Entre em contato para saber quais são as opções disponíveis.</p>
          </div>
          <div className="question">
            <h4>Quais são os prazos de entrega típicos para os projetos da Tech Legion?</h4>
            <p>Os prazos de entrega podem variar de acordo com a complexidade e o escopo do projeto. Nossa equipe se esforça para cumprir os prazos acordados e entregar resultados de qualidade dentro do prazo estabelecido.</p>
          </div>
          <div className="question">
            <h4>Vocês têm planos de manutenção para os projetos desenvolvidos?</h4>
            <p>Sim, oferecemos planos de manutenção para garantir o bom funcionamento dos projetos e realizar atualizações quando necessário.</p>
          </div>
          <div className="question">
            <h4>Como posso solicitar um orçamento?</h4>
            <p>Para solicitar um orçamento, basta preencher o formulário de contato acima e fornecer detalhes sobre seu projeto. Responderemos assim que possível.</p>
          </div>
          <div className="question">
            <h4>Vocês oferecem suporte pós-implantação?</h4>
            <p>Sim, oferecemos suporte após a implantação dos projetos. Estamos disponíveis para ajudar com qualquer problema ou dúvida que possa surgir.</p>
          </div>
        </div>
      </div>
    </S.Faq>
  )
}

export default Faq