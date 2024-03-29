import { useEffect, useRef, type ChangeEvent, useState, Fragment, useCallback } from "react"

import { type TypeDivisionTopicsSarched } from "@/settings/search/types"
import searchTopicsGeral from "@/utils/search/searchTopicsGeral"

import ListSearched from "./components/ListSearched"
import * as S from "./styles"

interface PropsPopUp {
  show: boolean,
  onClose: () => void,
  lockScroll?: "on" | "off" | "auto"
}


const PopUpSearch = ({ show, onClose, lockScroll = "auto" }: PropsPopUp): JSX.Element => {
  const refCardSearch = useRef<HTMLDivElement | null>(null)
  const refInputSearch = useRef<HTMLInputElement | null>(null)
  const [resultSearched, setResultSearched] = useState<TypeDivisionTopicsSarched[] | null>(null)
  const [valueSearched, setValueSearched] = useState("")

  useEffect(() => {
    if (lockScroll !== "auto") {
      document.body.classList[lockScroll === "on" ? "add" : "remove"]("overflow-hidden")
    }
  }, [lockScroll])

  useEffect(() => {
    if (lockScroll === "auto") {
      document.body.classList[show ? "add" : "remove"]("overflow-hidden")
    }
    if (show) {
      focusInput()
    }
  }, [show, lockScroll])

  const checkConditionsToClose = useCallback((ev: MouseEvent): void => {
    const { current: cardSearch } = refCardSearch
    if (cardSearch && !cardSearch.contains(ev.target as Node)) {
      onClose()
    }
  }, [onClose])

  useEffect(() => {
    if (show) {
      setValueSearched("")
      setTimeout(() => {
        document.addEventListener("click", checkConditionsToClose)
      }, 200)
      return () => {
        document.removeEventListener("click", checkConditionsToClose);
      }
    }
  }, [onClose, show, checkConditionsToClose])

  useEffect(() => {
    setResultSearched(valueSearched ? searchTopicsGeral(valueSearched) : null)
  }, [valueSearched])

  const handleSearch = (ev: ChangeEvent<HTMLInputElement>): void => {
    setValueSearched(ev.target.value)
  }

  const focusInput = (): void => {
    const { current: inputSearch } = refInputSearch
    if (inputSearch) {
      inputSearch.focus()
    }
  }

  const clearValueSearched = (): void => {
    setValueSearched("")
    focusInput()
  }

  return show ? (
    <S.PopUpSearch>
      <div className="card-search" ref={refCardSearch}>
        <div className="input-search">
          <i className='bx bxs-search icon-search'></i>
          <input
            ref={refInputSearch}
            placeholder="Faça a sua pesquisa"
            onChange={handleSearch}
            value={valueSearched}
            maxLength={60}
            spellCheck={false}
            autoComplete="off"
          />
          <button
            className="button-clear"
            id="button-clear-input-search"
            title="Botão para apagar o campo de pesquisa"
            onClick={clearValueSearched}
          ><i className='bx bx-x'></i></button>
        </div>
        <ListSearched
          list={resultSearched}
          searchedCharacter={valueSearched}
          onClose={onClose}
        />
        <button onClick={onClose} className="btn-close">Fechar</button>
      </div>
    </S.PopUpSearch>
  ) : <></>
}


export default PopUpSearch