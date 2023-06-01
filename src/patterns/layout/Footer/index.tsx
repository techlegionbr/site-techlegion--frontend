import logoLionWhite from "@/assets/images/logos/lion_white.png"
import logoTechLegion from "@/assets/images/logos/Logo_Tech_Legion_H_02_Blue.png"
import { hostLinks, socialMediaLinks } from "@/settings/links"
import { type TypeHostLinkMain, type TypeHostLinkService, type TypeSocialMedia } from "@/settings/links/types"

import Image from "next/image"
import Link from "next/link"

import * as S from "./styles"

interface TypeSocialMediaIcons {
  name: TypeSocialMedia,
  icon: React.ReactNode
}

const socialMedia: TypeSocialMediaIcons[] = [
  {
    name: "linkedin",
    icon: <i className='bx bxl-linkedin'></i>
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
    icon: <i className='bx bxl-facebook' ></i>
  },
  {
    name: "tiktok",
    icon: <i className='bx bxl-tiktok' ></i>
  }
]

interface TypeHostLinksServicesVisual {
  name: TypeHostLinkService,
  label: string
}

const hostLinksServicesVisual: TypeHostLinksServicesVisual[] = [
  {
    name: "desenvolvimento-de-site",
    label: "Desenvolvimento de Site"
  },
  {
    name: "desenvolvimento-de-pagina-de-vendas",
    label: "Desenvolvimento de Página de Vendas"
  },
  {
    name: "desenvolvimento-de-ecommerce",
    label: "desenvolvimento de Ecommerce"
  },
  {
    name: "desenvolvimento-de-aplicativo-mobile",
    label: "Desenvolvimento de Aplicativo Mobile"
  },
  {
    name: "desenvolvimento-de-chatbot-e-assistente",
    label: "Desenvolvimento de Chatbot e Assitente"
  },
  {
    name: "design-grafico",
    label: "Design Gráfico"
  },
  {
    name: "ux-ui-design",
    label: "UX/UI Design"
  },
  {
    name: "social-media",
    label: "Social Media"
  },
  {
    name: "marketing-digital",
    label: "Marketing Digital"
  },
  {
    name: "criacao-de-filtros-de-realidade-virtual",
    label: "Criação de Filtros"
  },
  {
    name: "analise-e-ciencia-de-dados",
    label: "Análise e Ciência de Dados"
  }
]


interface TypeHostLinksMainVisualVisual {
  name: TypeHostLinkMain,
  label: string
}

const hostLinksMainVisual: TypeHostLinksMainVisualVisual[] = [
  {
    name: "sobre",
    label: "Sobre"
  },
  {
    name: "servicos",
    label: "Serviços"
  },
  {
    name: "blog",
    label: "Blog"
  },
  {
    name: "contato",
    label: "Contato"
  }
]

const Footer = (): JSX.Element => {
  return (
    <S.Footer>
      <div className="content">
        <div className="sup-footer">
          <ul>
            <li>Institucional</li>
            <li className="image-logo"><Image src={logoTechLegion} alt="logo techlegion" width={200} /></li>
            <li className="speack"><i>Nosso negócio é vender o seu.</i></li>
            <li><Link href="/">Impacto Social</Link></li>
            <li><Link href="/">Diversidade e Inclusão</Link></li>
            {
              hostLinksMainVisual.map(hostlink => (
                <li key={hostlink.name}>
                  <Link href={hostLinks.main[hostlink.name]}>{hostlink.label}</Link>
                </li>
              ))
            }
          </ul>
          <ul>
            <li>Nossos Serviços</li>
            {
              hostLinksServicesVisual.map(hostLink => (
                <li key={hostLink.name}>
                  <Link href={hostLinks.services[hostLink.name]}>{hostLink.label}</Link>
                </li>
              ))
            }
          </ul>
          <ul>
            <li>Contato</li>
            <li>Rua Liberal, 1329, casa 12 – CEP 91920-680</li>
            <li>Camaquã – Porto Alegre – RS</li>
            <li>contato@techlegion.com.br</li>
            <li>(51) 98027-6708</li>
            <li>CNPJ 50.217.585/0001-74</li>
            <li className="speack"><i>Impulsionamos os resultados do seu negócio através da tecnologia.</i></li>
          </ul>
        </div>
        <div className="sub-footer">
          <div className="logo-lion">
            <Image src={logoLionWhite} alt="logo techlegion" width={50} />
          </div>
          <nav className="terms-polity-nav">
            <Link href="/">Política de Privacidade</Link>
            <Link href="/">Termos de Uso</Link>
          </nav>
          <nav className="social-media-nav">
            {
              socialMedia.map(sm => (
                <a key={sm.name} href={socialMediaLinks[sm.name]} target="_blank" rel="noreferrer">
                  {sm.icon}
                </a>
              ))
            }
          </nav>
        </div>
      </div>
    </S.Footer>
  )
}


export default Footer