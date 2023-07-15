
import TitleSection from "@/components/TitleSection"

import CardPlan from "./components/CardPlan"
import * as S from "./styles"



const PlansCloudez = (): JSX.Element => {
  return (
    <S.Plans>
      <div className="content">
        <TitleSection
          subTitle="Cloud Server"
          title="Serviço de Hospedagem"
          description="O Cloud Server é uma hospedagem na nuvem em que várias máquinas físicas compartilham recursos, permitindo que uma máquina assuma a carga de outra, se necessário."
        />
        <div className="cards-plan">
          <CardPlan
            attrsIncludes={["CDN Premium", "Otimização", "HTTPS Gratuito", "Suporte Técnico", "Backup Gratuito"]}
            title="Hospedagem Site"
            name="Plano Básico"
            value={99}
            link="#"
          />
          <CardPlan
            attrsIncludes={["CDN Premium", "Otimização", "HTTPS Gratuito", "Suporte Técnico", "Backup Gratuito", "Prevenção de Blocklist", "3 caixas de E-mail de 5GB", "100k mail gateway gratuito"]}
            title="Hospedagem Site e E-mail"
            name="Plano mais escolhido"
            value={137}
            link="#"
          />
          <CardPlan
            attrsIncludes={["CDN Premium", "Otimização", "HTTPS Gratuito", "Suporte Técnico", "Backup Gratuito", "Prevenção de Blocklist", "3 caixas de E-mail de 5GB", "100k mail gateway gratuito", "Sites Ilimitados*", "25DB SSD", "1GB RAM", "1 vCPU"]}
            title="Hospedagem Site e E-mail"
            name="Plano Avançado"
            value={197}
            link="#"
          />

        </div>
        <div className="benefits-cloud">
          <h2>Benefícios do Cloud Server</h2>
          <div className="line-sub-title" />
          <ul>
            <li>
              <i className='bx bxs-hdd'></i>
              <p><strong>Escalabilidade:</strong> Adicione facilmente mais capacidade para acompanhar o crescimento do seu negócio ou demanda, dimensionando verticalmente sua infraestrutura.</p>
            </li>
            <li>
              <i className='bx bxs-shield-alt-2'></i>
              <p><strong>Segurança:</strong> Garanta a continuidade do seu negócio com a transferência automática de recursos em caso de falha de um servidor físico, minimizando o tempo de inatividade.</p>
            </li>
            <li>
              <i className='bx bx-windows'></i>
              <p> <strong>Flexibilidade do sistema operacional:</strong> Escolha o sistema operacional mais adequado às suas necessidades e preferências, personalizando sua experiência na nuvem.</p>
            </li>
            <li>
              <i className='bx bxs-user'></i>
              <p><strong>Disponibilidade de recursos:</strong> A hospedagem do seu site permanece estável e disponível, mesmo durante picos de acesso de outros clientes, graças à distribuição dos recursos entre máquinas físicas na nuvem.</p>
            </li>
          </ul>
        </div>
      </div>
    </S.Plans>
  )
}

export default PlansCloudez