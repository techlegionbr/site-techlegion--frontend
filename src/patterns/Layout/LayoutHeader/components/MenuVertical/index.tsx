import { useEffect, useState } from "react"

import { hostLinks } from "@/settings/links"
import { type TypeHostLinkMain } from "@/settings/links/types"

import Link from "next/link"
import { useRouter } from "next/router"

import { hostLinksMainHeader } from "../../settings/links"
import PopUpSearch from "../PopUpSearch"
import * as S from "./styles"




interface IMenuBarProps {
  show: boolean,
  onClose: () => void
}

export const PopUpMenuVertical = ({ show, onClose }: IMenuBarProps): JSX.Element => {
  const { pathname } = useRouter()
  const [showPopUpSearch, setShowPopUpSearch] = useState(false)
  useEffect(() => {
    document.body.classList[show ? "add" : "remove"]("overflow-hidden")
  }, [show])

  const currentRoute = (): TypeHostLinkMain | "" => {
    const basePath = pathname === "/" ? "/" : `/${pathname.split("/").filter(Boolean)[0]}`
    return hostLinksMainHeader.find(route => (
      route.href === basePath
    ))?.name ?? ""
  }
  return show ? (
    <S.PopUpMenuVertical>
      <div className="vertical-menu">
        <button
          className="button-close"
          onClick={onClose}
          id="button-close"
          title="Botão para fechar menu vertical"
        >
          <i className='bx bxs-chevron-right'></i>
        </button>
        <button
          className="button-search"
          id="button-search"
          title="Botão para abrir a tela de pesquisa"
          onClick={() => { setShowPopUpSearch(true); }}
        >
          <i className='bx bxs-search icon-search'></i>
          <span>Pesquisar</span>
        </button>
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
      </div>
      <PopUpSearch
        show={showPopUpSearch}
        lockScroll="on"
        onClose={() => { setShowPopUpSearch(false); }}
      />
    </S.PopUpMenuVertical>
  ) : <></>
}

interface PropsHamburger {
  onOpen: () => void,
  className?: string,
}

export const ButtonHamburger = ({ onOpen, className }: PropsHamburger): JSX.Element => {
  return (
    <>
      <S.Hamburger
        onClick={onOpen}
        title="Menu vertical"
        className={className}>
        <i className='bx bx-menu'></i>
      </S.Hamburger>
    </>
  )
}
