import Button from "@/components/Button"
import TitleSection from "@/components/TitleSection"
import { socialMediaLinks } from "@/settings/links"
import { type TypeSocialMedia } from "@/settings/links/types"

import * as S from "./styles"


interface TypeSocialMediaIcons {
  name: TypeSocialMedia,
  icon: React.ReactNode
}

const socialMedia: TypeSocialMediaIcons[] = [
  {
    name: "linkedin",
    icon: <i className='bx bxl-linkedin-square' ></i>
  },
  {
    name: "twitter",
    icon: <i className='bx bxl-twitter'></i>
  },
  {
    name: "instagram",
    icon: <i className='bx bxl-instagram-alt' ></i>
  },
  {
    name: "facebook",
    icon: <i className='bx bxl-facebook-square' ></i>
  },
  {
    name: "tiktok",
    icon: <i className='bx bxl-tiktok' ></i>
  },
  {
    name: "whatsapp",
    icon: <i className='bx bxl-whatsapp' ></i>
  }
]

const Main = (): JSX.Element => {
  return (
    <S.Main>
      <div className="content">
        <TitleSection
          subTitle="para mais informações"
          title="Entre em Contato"
        />
        <div className="contacts-cards">
          <div className="form-contact">
            <h3>Faça o seu orçamento!</h3>
            <form>
              <input placeholder="Nome" required />
              <input placeholder="Email" required />
              <textarea placeholder="Mensagem" required />
              <Button iconRight={<i className='bx bxs-message'></i>} className="button-form">Enviar</Button>
            </form>
          </div>
          <ul className="social-medias">
            {
              socialMedia.map(sm => (
                <li key={sm.name}>
                  <a
                    target="_blank"
                    href={socialMediaLinks[sm.name]}
                    rel="noreferrer"
                    title={sm.name}
                  >
                    {sm.icon}
                    <span>{sm.name}</span>
                  </a>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </S.Main>
  )
}

export default Main