
import Button from "@/components/Button"
import { socialMediaLinks } from "@/settings/links"

import * as S from "./styles"

const Main = (): JSX.Element => {
  return (
    <S.Main>
      <div className="content">
        <div className="description-apresentation">
          <h4>Seja bem-vindo ao site da</h4>
          <h1>Tech <span>Legion</span></h1>
          <ul className="slogan-tags">
            <li><i className='bx bxs-checkbox-checked'></i>Responsabilidade</li>
            <li><i className='bx bxs-checkbox-checked'></i>Qualidade</li>
            <li><i className='bx bxs-checkbox-checked'></i>Oportunidade</li>
          </ul>
          <p>
            Somos uma <strong>legião</strong> de profissionais de tecnologia, designers, gestores de marketing, analistas e cientistas de dados,
            engenheiros de software e desenvolvedores <strong>apaixonados</strong> por criar soluções digitais <strong>sob medida</strong> para nossos clientes.
          </p>
          <Button
            size="medium"
            className="button-whatsapp"
            target="_blank"
            href={socialMediaLinks.whatsapp}
            iconRight={<i className='bx bxl-whatsapp' ></i>}
          >Conversar pelo Whatsapp</Button>

        </div>
        <div className="video-amoster-container">
          <div className="video-amoster">
            <video autoPlay loop muted>
              <source src="/videos/video-techlegion.webm" />
            </video>
          </div>
        </div>
      </div>
    </S.Main>
  )
}

export default Main