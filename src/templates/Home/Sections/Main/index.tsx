
import Button from "@/components/Button"

import * as S from "./styles"

const Main = (): JSX.Element => {
  return (
    <S.Main>
      <div className="content">
        <div className="description-apresentation">
          <h3>Seja bem-vindo ao site da</h3>
          <h1>Tech <span>Legion</span></h1>
          <ul className="slogan-tags">
            <li><i className='bx bxs-checkbox-checked'></i>Responsabilidade</li>
            <li><i className='bx bxs-checkbox-checked'></i>Qualidade</li>
            <li><i className='bx bxs-checkbox-checked'></i>Oportunidade</li>
          </ul>
          <p>
            Somos uma <strong>legião de profissionais de tecnologia</strong>, designers, gestores de marketing, analistas e cientistas de dados,
            engenheiros de software e desenvolvedores apaixonados por criar <strong>soluções digitais</strong> sob medida para nossos clientes.
          </p>
          <Button className="button-whatsapp">Conversar pelo Whatsapp</Button>

        </div>
        <div className="video-amoster-container">
          <div className="video-amoster">
            <video autoPlay loop muted>
              <source src="/videos/video-techlegion.mp4" />
            </video>
          </div>
        </div>
      </div>
    </S.Main>
  )
}

export default Main