import Button from "@/components/Button"
import NoBr from "@/components/NoBr"
import TitleSection from "@/components/TitleSection"
import { socialMediaLinks } from "@/settings/links"

import * as S from "./styles"

const YourMoment = (): JSX.Element => {
  return (
    <S.YourMoment>
      <div className="content">
        <TitleSection
          subTitle="Entre em contato"
          title="Seu Momento"
        />
        <p>
          Envie-nos uma mensagem para que possamos compreender melhor o seu <strong>contexto digital</strong> e
          avaliar como podemos <strong><NoBr>ajudá-lo(a)</NoBr></strong>! Estamos prontos para oferecer <strong>soluções
            personalizadas</strong> que atendam às suas necessidades e impulsionem o seu <strong>sucesso no mundo digital</strong>
        </p>
        <Button
          href={socialMediaLinks.whatsapp}
          target="_blank"
          size="medium"
          className="button-contact"
          iconRight={<i className='bx bxs-phone-call'></i>}
        >Entrar em Contato</Button>
      </div>
    </S.YourMoment>
  )
}

export default YourMoment