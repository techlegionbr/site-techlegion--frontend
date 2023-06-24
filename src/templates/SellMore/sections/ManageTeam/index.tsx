import TitleSection from "@/components/TitleSection"

import * as S from "./styles"


const ManageTeam = (): JSX.Element => {
  return (
    <S.ManageTeam>
      <div className="content">
        <TitleSection
          title="Kommo: vendas eficientes, comunicação unificada!"
          subTitle="Simplifique a Gestão da sua Equipe de Vendas: Eficiência Garantida com a Kommo!"
        />
        <ul className="cards-benefits">
          <li>
            <i className='bx bxs-search-alt-2' ></i>
            <span>Acompanhe o atendimento ao cliente</span>
          </li>
          <li>
            <i className='bx bxs-cloud-upload' ></i>
            <span>Centralização dos Canais de Atendimento</span>
          </li>
          <li>
            <i className='bx bx-history'></i>
            <span>Histórico de Negociação</span>
          </li>
          <li>
            <i className='bx bx-task'></i>
            <span>Gestão de Tarefas</span>
          </li>
          <li>
            <i className='bx bxs-shield-plus'></i>
            <span>Informações de Contato</span>
          </li>
          <li>
            <i className='bx bxs-shield-plus'></i>
            <span>Pré-atendimento Automatizado</span>
          </li>
        </ul>
      </div>
    </S.ManageTeam>
  )
}

export default ManageTeam