import imageKommoStamp from "@/assets/images/kommo-stamp/White box.png"
import Button from "@/components/Button"
import TitleSection from "@/components/TitleSection"
import { socialMediaLinks } from "@/settings/links"

import Image from "next/image"

import * as S from "./styles"

const KommoStamp = (): JSX.Element => {
  return (
    <S.KommoStamp>
      <div className="content">
        <TitleSection
          subTitle="Kommo"
          title="Somos uma Empresa Parceira Certificada"
        />
        <div className="stap-kommo-container">
          <Image className="stamp-image" src={imageKommoStamp} width={120} alt="Selo de parceiro da Kommo" />
          <div className="description">
            <h3> Parceria Certificada Kommo: Juntos para o sucesso!</h3>
            <p>Descubra como a nossa parceria certificada com a Kommo pode impulsionar o crescimento do seu negócio. Conheça os benefícios exclusivos que oferecemos como parceiros certificados da Kommo e saiba como essa colaboração pode ajudá-lo a alcançar novos patamares de sucesso.</p>
          </div>
        </div>


        <Button target="_blank" href={socialMediaLinks.whatsapp} size="medium" className="btn-contact">Saber Mais</Button>
      </div>
    </S.KommoStamp>
  )
}

export default KommoStamp