import imageKommo from "@/assets/images/seellMore/kommo-caixa-de-entrada-conversa-medio.webp"
import imageKommoFunil from "@/assets/images/seellMore/kommo-crm-funil-de-vendas-lead.png"
import Button from "@/components/Button"
import TitleSection from "@/components/TitleSection"
import { socialMediaLinks } from "@/settings/links"

import Image from "next/image"

import * as S from "./styles"

const SelectKommo = (): JSX.Element => {
  return (
    <S.SelectKommo>
      <div className="content">
        <TitleSection
          title="Comunicação Unificada e Vendas Eficientes com Kommo!"
          subTitle="Unificação dos canais de atendimento para uma comunicação eficaz"
        />
        <div className="reasons-articles">
          <div className="reason-article">
            <div className="reason-description">
              <h3>Unificação dos canais de atendimento</h3>
              <p>
                <strong>Converse com leads no seu aplicativo de mensagens preferido, diretamente do CRM.</strong>
                {" "}Capture leads através de mensagens e responda de forma eficiente, tendo todas as informações relevantes
                no mesmo lugar. Simplifique a comunicação, aumente a produtividade e forneça atendimento personalizado.
                Experimente a integração perfeita entre mensagens e CRM para melhorar seu negócio.
              </p>
            </div>
            <div className="reason-image">
              <Image src={imageKommo} alt="kommo-caixa-de-entrada-conversa-medio" width={300} />
            </div>
          </div>
          <div className="reason-article">
            <div className="reason-image">
              <Image src={imageKommoFunil} alt="kommo-caixa-de-entrada-conversa-medio" width={300} />
            </div>
            <div className="reason-description">
              <h3>Gestão de vendas com uma experiência fácil e intuitiva</h3>
              <p>
                <strong>Obtenha uma visão panorâmica do seu processo de vendas com o funil de vendas.</strong>
                Acompanhe o progresso de cada lead, visualize tarefas e compromissos pendentes e tome decisões
                estratégicas. Identifique gargalos, priorize ações e impulsione suas vendas de forma eficiente.
                Tenha controle total e uma visão completa do seu processo de vendas para alcançar suas metas com
                confiança.
              </p>
              <Button
                target="_blank"
                href={socialMediaLinks.whatsapp}
                className="btn-sell-more"
                size="medium"
                iconRight={<i className='bx bx-money-withdraw' ></i>}
              >Quero Vender Mais</Button>
            </div>
          </div>
        </div>
      </div>
    </S.SelectKommo>
  )
}


export default SelectKommo