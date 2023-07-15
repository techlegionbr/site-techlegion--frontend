import logoLionWhite from "@/assets/images/logos/lion_white.webp"
import logoTechLegion from "@/assets/images/logos/Logo_Tech_Legion_H_02_Blue.webp"
import { hostLinks } from "@/settings/links"

import Image from "next/image"
import Link from "next/link"

import { hostLinksMainFooter, hostLinksServicesFooter, hostLinksSocialMediaFooter } from "./settings/links"
import * as S from "./styles"


const LayoutFooter = (): JSX.Element => {
  return (
    <S.LayoutFooter>
      <div className="content">
        <div className="sup-footer">
          <ul>
            <li>Institucional</li>
            <li className="image-logo">
              <Image src={logoTechLegion} alt="logo techlegion" width={200} />
            </li>
            <li className="speack">
              <i>Nosso negócio é vender o seu.</i>
            </li>
            <li>
              <Link
                href={hostLinks.ourValues["#diversidade-e-inclusao"]}
                title="Diversidade e Inclusão"
              >Impacto Social</Link>
            </li>
            <li>
              <Link
                href={hostLinks.ourValues["#impacto-social"]}
                title="Impacto Social"
              >Diversidade e Inclusão</Link>
            </li>
            {
              hostLinksMainFooter.map(hostlink => (
                <li key={hostlink.label}>
                  <Link
                    href={hostlink.href}
                    title={hostlink.label}
                  >{hostlink.label}</Link>
                </li>
              ))
            }
          </ul>
          <ul>
            <li>Nossos Serviços</li>
            {
              hostLinksServicesFooter.map(hostLink => (
                <li key={hostLink.label}>
                  <Link
                    href={hostLink.href}
                    title={hostLink.label}
                  >{hostLink.label}</Link>
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
            <Link
              href={hostLinks.main["politica-de-privacidade"]}
              title="Política de Privacidade"
            >Política de Privacidade</Link>
            <Link
              href={hostLinks.main["termos-de-uso"]}
              title="Termos de Uso"
            >Termos de Uso</Link>
          </nav>
          <nav className="social-media-nav">
            {
              hostLinksSocialMediaFooter.map((sm, index) => (
                <a
                  key={index}
                  href={sm.href}
                  target="_blank"
                  rel="noreferrer"
                  title={sm.name}
                >{sm.icon}</a>
              ))
            }
          </nav>
        </div>
      </div>
    </S.LayoutFooter>
  )
}


export default LayoutFooter