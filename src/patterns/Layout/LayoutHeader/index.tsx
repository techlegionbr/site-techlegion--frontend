import { useEffect, useState } from "react"

import logoTechLegion from "@/assets/images/logos/Logo_Tech_Legion_H_02_Blue.webp"
import { hostLinks, socialMediaLinks } from "@/settings/links"
import { type TypeHostLinkMain } from "@/settings/links/types"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

import * as Menu from "./components/MenuVertical"
import PopUpSearch from "./components/PopUpSearch"
import { hostLinksMainHeader } from "./settings/links"
import * as S from "./styles"



const SupHeader = (): JSX.Element => {
  return (
    <S.SupHeader>
      <div className="content">
        <div className="contact-info">
          <span className="telephone">
            <i className='bx bxs-phone'></i>
            (51) 98027-6708
          </span>
          <a
            href={socialMediaLinks.email}
            target="_blank"
            rel="noreferrer"
            title="E-mail"
          ><i className='bx bxs-envelope'></i>
            contato@techlegion.com.br
          </a>
        </div>
        <nav className="social-medias">
          <a
            href={socialMediaLinks.facebook}
            title="Facebook"
            target="_blank"
            rel="noreferrer"
          ><i className='bx bxl-facebook'></i></a>
          <a
            href={socialMediaLinks.twitter}
            target="_blank"
            title="Twitter"
            rel="noreferrer"
          ><i className='bx bxl-twitter' ></i></a>
          <a
            href={socialMediaLinks.instagram}
            target="_blank"
            title="Instagram"
            rel="noreferrer"
          ><i className='bx bxl-instagram-alt' ></i></a>
          {/* <a><i className='bx bx-wifi' ></i></a> */}
        </nav>
      </div>
    </S.SupHeader>
  )
}

interface PropsHeader {
  supHeader?: boolean,
  navigation?: boolean
}

const LayoutHeader = ({ supHeader = true, navigation = true }: PropsHeader): JSX.Element => {
  const [isTransparent, setIsTransparent] = useState(true)
  const [showPopUpSearch, setShowPopUpSearch] = useState(false)
  const [showVerticalMenu, setShowVerticalMenu] = useState(false)
  const { pathname } = useRouter()

  const currentRoute = (): TypeHostLinkMain | "" => {
    const basePath = pathname === "/" ? "/" : `/${pathname.split("/").filter(Boolean)[0]}`

    return hostLinksMainHeader.find(route => (
      route.href === basePath
    ))?.name ?? ""
  }

  useEffect(() => {
    const listenScroll = (): void => { setIsTransparent(window.scrollY === 0); }

    document.addEventListener("scroll", listenScroll)
    return () => { removeEventListener("scroll", listenScroll); }
  }, [])

  return (
    <>
      <S.LayoutHeader>
        {supHeader && <SupHeader />}
        <S.SubHeader istransparent={isTransparent ? "true" : "false"}>
          <div className="content">

            <Link href="/" className="home_link-img">
              <Image
                src={logoTechLegion}
                alt="Logo da Tech Legion"
                width={210}
                height={45}
                priority
              />
            </Link>

            {
              navigation && (
                <>
                  <div className="menu-nav">
                    <nav>
                      {
                        hostLinksMainHeader.map(route => (
                          <Link
                            key={route.name} className={currentRoute() === route.name ? "marked" : ""}
                            href={hostLinks.main[route.name]}
                          >{route.label}</Link>
                        ))
                      }
                    </nav>
                    <button
                      className="button-search"
                      id="button-search"
                      title="Botão de pesquisa"
                      onClick={() => { setShowPopUpSearch(true); }}
                    ><i className='bx bxs-search'></i></button>
                  </div>
                  <Menu.ButtonHamburger
                    className="menu-hamburger"
                    onOpen={() => { setShowVerticalMenu(true) }}
                  />
                </>
              )
            }
          </div>
        </S.SubHeader>
      </S.LayoutHeader>
      <PopUpSearch
        show={showPopUpSearch}
        onClose={() => { setShowPopUpSearch(false); }}
      />
      <Menu.PopUpMenuVertical
        show={showVerticalMenu}
        onClose={() => { setShowVerticalMenu(false); }}
      />
    </>
  )
}

export default LayoutHeader