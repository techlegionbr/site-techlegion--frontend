import imageApresentation from "@/assets/images/about/team-young-cheerful-managers-sitting-couch-office-1024x1536.webp"
import imageCarlosProfile from "@/assets/images/persons-profile/Carlos.webp"
import imageLeonardoProfile from "@/assets/images/persons-profile/Leonardo-Ferraz.webp"
import Button from "@/components/Button"
import { ProfileCard } from "@/patterns/ProfileCard"
import { socialMediaLinks } from "@/settings/links"

import Image from "next/image"

import * as S from "./styles"

const Main = (): JSX.Element => {
  return (
    <S.Main>
      <div className="content">
        <div className="description-apresentation">
          <h4>Prazer, somos a</h4>
          <h1>Tech <span>Legion</span></h1>
          <p>
            Uma legião apaixonada por <strong>tecnologia</strong>, <strong>designers</strong>, <strong>gestores de marketing</strong>, <strong>analistas e cientistas de dados</strong>,
            <strong>engenheiros de software</strong> e <strong>desenvolvedores</strong> apaixonados por criar soluções digitais sob medida para nossos clientes.
          </p>
          <div className="persons-charge">
            <ProfileCard.Root className="profile-card">
              <ProfileCard.Image src={imageLeonardoProfile} alt="Leonardo Ferraz" />
              <ProfileCard.Content name="Leonardo Ferraz" charge="CEO Tech Legion" />
            </ProfileCard.Root>

            <ProfileCard.Root className="profile-card">
              <ProfileCard.Image src={imageCarlosProfile} alt="Carlos Goulart" />
              <ProfileCard.Content name="Carlos Goulart" charge="CEO Tech Legion" />
            </ProfileCard.Root>
          </div>

          <Button size="medium" href={socialMediaLinks.whatsapp} target="_blank" className="button-contact">Entre em Contato</Button>
        </div>
        <div className="image-apresentation">
          <Image src={imageApresentation} alt="grupo de jovens alegres" width={300} priority />
        </div>
      </div>
    </S.Main>
  )
}

export default Main