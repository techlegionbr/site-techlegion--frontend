import { useEffect, useState } from "react"

import logoTechLegion from "@/assets/images/logos/Logo_Tech_Legion_H_02_Blue.png"
import { hostLinks, socialMediaLinks } from "@/settings/links"
import { type TypeHostLinkMain } from "@/settings/links/types"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

import Hamburger from "./components/Hamburger"
import PopUpSearch from "./components/PopUpSearch"
import * as S from "./styles"



interface PropsHeader {
  headerContact?: boolean
}

interface TypeRouteInternal {
  name: TypeHostLinkMain,
  label: string
}

const routesInternal: TypeRouteInternal[] = [
  {
    name: "início",
    label: "Início"
  },
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

const SupHeader = (): JSX.Element => {
  return (
    <S.SupHeader>
      <div className="content">
        <div className="contact-info">
          <span className="telephone">
            <i className='bx bxs-phone'></i>
            (51) 98027-6708
          </span>
          <a>
            <i className='bx bxs-envelope'></i>
            contato@techlegion.com.br
          </a>
        </div>
        <nav className="social-medias">
          <a href={socialMediaLinks.facebook} target="_blank" rel="noreferrer"><i className='bx bxl-facebook'></i></a>
          <a href={socialMediaLinks.twitter} target="_blank" rel="noreferrer"><i className='bx bxl-twitter' ></i></a>
          <a href={socialMediaLinks.instagram} target="_blank" rel="noreferrer"><i className='bx bxl-instagram-alt' ></i></a>
          <a><i className='bx bx-wifi' ></i></a>
        </nav>
      </div>
    </S.SupHeader>
  )
}


const Header = ({ headerContact = true }: PropsHeader): JSX.Element => {
  const [isTransparent, setIsTransparent] = useState(true)
  const [showPopUpSearch, setShowPopUpSearch] = useState(false)
  const { pathname } = useRouter()

  const currentRoute = (): TypeHostLinkMain => {
    const basePath = `/${pathname.split("/").filter(Boolean)[0]}`
    return routesInternal.find(route => (
      hostLinks.main[route.name] === basePath
    ))?.name ?? "início"
  }

  useEffect(() => {
    const listenScroll = (): void => { setIsTransparent(window.scrollY === 0); }

    document.addEventListener("scroll", listenScroll)
    return () => { removeEventListener("scroll", listenScroll); }
  }, [])

  return (
    <>
      <S.Header>
        {headerContact && <SupHeader />}
        <S.SubHeader istransparent={isTransparent ? "true" : "false"}>
          <div className="content">
            <Link href="/" className="home_link-img">
              <Image src={logoTechLegion} alt="Logo da Tech Legion" width={210} priority />
            </Link>
            <div className="menu-nav">
              <nav>
                {
                  routesInternal.map(route => (
                    <Link key={route.name} className={currentRoute() === route.name ? "marked" : ""} href={hostLinks.main[route.name]}>{route.label}</Link>
                  ))
                }
              </nav>
              <button
                className="button-search"
                onClick={() => { setShowPopUpSearch(true); }}
              ><i className='bx bxs-search'></i></button>
            </div>
            <Hamburger className="menu-hamburger" />
          </div>
        </S.SubHeader>
      </S.Header>
      <PopUpSearch show={showPopUpSearch} />
    </>
  )
}

export default Header