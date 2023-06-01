import logoLionWhite from "@/assets/images/logos/lion_white.png"
import logoTechLegion from "@/assets/images/logos/Logo_Tech_Legion_H_02_Blue.png"
import { socialMediaLinks } from "@/settings/links"
import { type TypeSocialMedia } from "@/settings/links/types"

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

const Footer = (): JSX.Element => {
  return (
    <S.Footer>
      <div className="content">
        <div className="sup-footer">
          <ul>
            <li>Institucional</li>
            <li className="image-logo"><Image src={logoTechLegion} alt="logo techlegion" width={200} /></li>
            <li className="speack"><i>Nosso negócio é vender o seu.</i></li>
            <li><Link href="/">Sobre</Link></li>
            <li><Link href="/">Impacto Social</Link></li>
            <li><Link href="/">Diversidade e Inclusão</Link></li>
            <li><Link href="/">Serviços</Link></li>
            <li><Link href="/">Blog</Link></li>
            <li><Link href="/">Contato</Link></li>
          </ul>
          <ul>
            <li>Nossos Serviços</li>
            <li><Link href="/">Desenvolvimento de site</Link></li>
            <li><Link href="/">Desenvolvimento de página de vendas</Link></li>
            <li><Link href="/">Desenvolvimento de ecommerce</Link></li>
            <li><Link href="/">Desenvolvimento de aplicativo mobile</Link></li>
            <li><Link href="/">Desenvolvimento de chatbot e assistente</Link></li>
            <li><Link href="/">Design Gráfico</Link></li>
            <li><Link href="/">UX/UI Design</Link></li>
            <li><Link href="/">Social Media</Link></li>
            <li><Link href="/">Marketing Digital</Link></li>
            <li><Link href="/">Gestão de Tráfego</Link></li>
            <li><Link href="/">Criação de Filtros</Link></li>
            <li><Link href="/">Análise e ciência de dados</Link></li>
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