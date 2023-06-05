import Button from "@/components/Button"
import TitleSection from "@/components/TitleSection"

import * as S from "./styles"


const Plans = (): JSX.Element => {
  return (
    <S.Plans>
      <div className="content">
        <TitleSection
          subTitle="Cloud Server"
          title="Serviço de Hospedagem"
          description="Como o nome já diz, o Cloud Server utiliza uma hospedagem na nuvem, o que significa que você não contará com uma máquina física. Nessa estrutura na nuvem, diversas máquinas físicas dividem os recursos, fazendo com que uma máquina assuma a carga da outra caso haja necessidade."
        />
        <div className="cards-plan">
          <div className="card">
            <span className="status-plan">Plano Básico</span>
            <i className='bx bxl-soundcloud icon-cloud'></i>
            <h4>Hospedagem Site</h4>
            <div className="price">
              <span className="sub-price">MÊS</span>
              <span className="value-price">R$99</span>
            </div>
            <ul>
              <li className="attr-exclude"><i className='bx bx-x'></i><span>Sites Ilimitados*</span></li>
              <li className="attr-exclude"><i className='bx bx-x'></i><span>25DB SSD</span></li>
              <li className="attr-exclude"><i className='bx bx-x'></i><span>1GB RAM</span></li>
              <li className="attr-exclude"><i className='bx bx-x'></i><span>1 vCPU</span></li>
              <li className="attr-include"><i className='bx bx-check'></i><span>CDN Premium</span></li>
              <li className="attr-include"><i className='bx bx-check'></i><span>Otimização</span></li>
              <li className="attr-include"><i className='bx bx-check'></i><span>HTTPS Gratuito</span></li>
              <li className="attr-include"><i className='bx bx-check'></i><span>Suporte Técnico</span></li>
              <li className="attr-include"><i className='bx bx-check'></i><span>Backup Gratuito</span></li>
              <li className="attr-exclude"><i className='bx bx-x'></i><span>Prevenção de Blocklist</span></li>
              <li className="attr-exclude"><i className='bx bx-x'></i><span>3 caixas de E-mail de 5GB</span></li>
              <li className="attr-exclude"><i className='bx bx-x'></i><span>100k mail gateway gratuito</span></li>
            </ul>
            <Button className="button-know-more">Saiba Mais</Button>
          </div>
          <div className="card">
            <span className="status-plan">Plano mais escolhido</span>
            <i className='bx bxl-soundcloud icon-cloud'></i>
            <h4>Hospedagem Site e E-mail</h4>
            <div className="price">
              <span className="sub-price">MÊS</span>
              <span className="value-price">R$137</span>
            </div>
            <ul>
              <li className="attr-exclude"><i className='bx bx-x'></i><span>Sites Ilimitados*</span></li>
              <li className="attr-exclude"><i className='bx bx-x'></i><span>25DB SSD</span></li>
              <li className="attr-exclude"><i className='bx bx-x'></i><span>1GB RAM</span></li>
              <li className="attr-exclude"><i className='bx bx-x'></i><span>1 vCPU</span></li>
              <li className="attr-include"><i className='bx bx-check'></i><span>CDN Premium</span></li>
              <li className="attr-include"><i className='bx bx-check'></i><span>Otimização</span></li>
              <li className="attr-include"><i className='bx bx-check'></i><span>HTTPS Gratuito</span></li>
              <li className="attr-include"><i className='bx bx-check'></i><span>Suporte Técnico</span></li>
              <li className="attr-include"><i className='bx bx-check'></i><span>Backup Gratuito</span></li>
              <li className="attr-include"><i className='bx bx-check'></i><span>Prevenção de Blocklist</span></li>
              <li className="attr-include"><i className='bx bx-check'></i><span>3 caixas de E-mail de 5GB</span></li>
              <li className="attr-include"><i className='bx bx-check'></i><span>100k mail gateway gratuito</span></li>
            </ul>
            <Button className="button-know-more">Saiba Mais</Button>
          </div>
          <div className="card">
            <span className="status-plan">Plano Avançado</span>
            <i className='bx bxl-soundcloud icon-cloud'></i>
            <h4>Hospedagem Site e E-mail</h4>
            <div className="price">
              <span className="sub-price">MÊS</span>
              <span className="value-price">R$197</span>
            </div>
            <ul>
              <li className="attr-include"><i className='bx bx-check'></i><span>Sites Ilimitados*</span></li>
              <li className="attr-include"><i className='bx bx-check'></i><span>25DB SSD</span></li>
              <li className="attr-include"><i className='bx bx-check'></i><span>1GB RAM</span></li>
              <li className="attr-include"><i className='bx bx-check'></i><span>1 vCPU</span></li>
              <li className="attr-include"><i className='bx bx-check'></i><span>CDN Premium</span></li>
              <li className="attr-include"><i className='bx bx-check'></i><span>Otimização</span></li>
              <li className="attr-include"><i className='bx bx-check'></i><span>HTTPS Gratuito</span></li>
              <li className="attr-include"><i className='bx bx-check'></i><span>Suporte Técnico</span></li>
              <li className="attr-include"><i className='bx bx-check'></i><span>Backup Gratuito</span></li>
              <li className="attr-include"><i className='bx bx-check'></i><span>Prevenção de Blocklist</span></li>
              <li className="attr-include"><i className='bx bx-check'></i><span>3 caixas de E-mail de 5GB</span></li>
              <li className="attr-include"><i className='bx bx-check'></i><span>100k mail gateway gratuito</span></li>
            </ul>
            <Button className="button-know-more">Saiba Mais</Button>
          </div>
        </div>
        <div className="benefits-cloud">
          <h2>Benefícios do Cloud Server</h2>
          <ul>
            <li><i className='bx bxs-hdd'></i>É escalável: você pode adicionar mais capacidade rapidamente;</li>
            <li><i className='bx bxs-shield-alt-2'></i>É mais seguro : se um servidor falhar, os recursos são processados por outro servidor físico, sem sair do ar;</li>
            <li><i className='bx bx-windows'></i>Cada cliente pode selecionar seu próprio sistema operacional, ao contrário da opção VPS;</li>
            <li><i className='bx bxs-user'></i>Se outro cliente do sistema tiver um pico de acesso, a disponibilidade de recursos da hospedagem do seu site não é afetada.</li>
          </ul>
        </div>
      </div>
    </S.Plans>
  )
}

export default Plans