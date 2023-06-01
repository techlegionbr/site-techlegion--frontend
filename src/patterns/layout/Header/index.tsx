import { useEffect, useState } from "react"

import logoTechLegion from "@/assets/images/logos/Logo_Tech_Legion_H_02_Blue.png"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

import Hamburger from "./components/Hamburger"
import * as S from "./styles"


interface PropsHeader {
  headerContact?: boolean
}

type TypePageCurrent = "home" | "about" | "services" | "blog" | "contact"

interface TypeRoute {
  path: string,
  name: TypePageCurrent,
  label: string
}

const routes: TypeRoute[] = [
  {
    path: "/",
    name: "home",
    label: "Início"
  },
  {
    path: "/sobre",
    name: "about",
    label: "Sobre"
  },
  {
    path: "/servicos",
    name: "services",
    label: "Serviços"
  },
  {
    path: "/blog",
    name: "blog",
    label: "Blog"
  },
  {
    path: "/contato",
    name: "contact",
    label: "Contato"
  }
]


const Header = ({ headerContact = true }: PropsHeader): JSX.Element => {
  const [isTransparent, setIsTransparent] = useState(true)

  const { pathname } = useRouter()
  const currentRoute = (): string => {
    const basePath = `/${pathname.split("/").filter(Boolean)[0]}`

    return routes.find(route => route.path === basePath)?.name ?? ""
  }


  const listenScroll = (): void => {
    setIsTransparent(window.scrollY === 0)
  }

  useEffect(() => {
    document.addEventListener("scroll", listenScroll)
    return () => { removeEventListener("scroll", listenScroll); }
  }, [])

  return (
    <>
      {
        headerContact && (
          <S.Contacts>
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
                <a><i className='bx bxl-facebook'></i></a>
                <a><i className='bx bxl-twitter' ></i></a>
                <a><i className='bx bxl-instagram-alt' ></i></a>
                <a><i className='bx bx-wifi' ></i></a>
              </nav>
            </div>
          </S.Contacts>
        )
      }
      <S.Header istransparent={isTransparent ? "true" : "false"}>
        <div className="content">
          <Link href="/" className="home_link-img">
            <Image src={logoTechLegion} alt="Logo da Tech Legion" width={210} priority />
          </Link>
          <nav>
            {
              routes.map(route => (
                <Link key={route.name} className={currentRoute() === route.name ? "marked" : ""} href={route.path}>{route.label}</Link>
              ))
            }
          </nav>
          <Hamburger className="menu-hamburger" />
        </div>
      </S.Header>
    </>
  )
}

export default Header