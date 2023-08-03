/* eslint-disable react-hooks/exhaustive-deps */

import { useState, type MouseEventHandler, useEffect, useRef } from "react"




import TitleItem from "@/components/TitleItem"

import * as S from "./styles"
import { type IDropDownMenuProps } from "./types"



const DropDownMenu = ({ options, onChange, width, title, value }: IDropDownMenuProps): JSX.Element => {
  const [optionSelected, setOptionSelected] = useState(options[0])
  const [showDropDown, setShowDropDown] = useState(false)
  const dropDownRef = useRef<HTMLUListElement | null>(null)
  useEffect(() => {
    if (onChange) {
      onChange(optionSelected?.value ?? null)
    }
  }, [optionSelected])

  useEffect(() => {
    const optionAccordingToValue = options.find(option => option.value === value)
    if (value && optionAccordingToValue) {
      setOptionSelected(optionAccordingToValue)
    }

  }, [value, options])

  useEffect(() => {
    const { current: dropDown } = dropDownRef
    if (showDropDown && dropDown && typeof window !== "undefined") {
      const handleClickInWindow = (ev: MouseEvent): void => {
        setShowDropDown(dropDown.contains(ev.target as Node))
      }
      setTimeout(() => {
        window.document.addEventListener("click", handleClickInWindow)
      }, 200)
      return () => {
        window.document.removeEventListener("click", handleClickInWindow);
      }
    }
  }, [showDropDown])


  const handleClickButtonOpenDropDown: MouseEventHandler<HTMLButtonElement> = (ev): void => {
    ev.preventDefault()
    setShowDropDown(prevShow => !prevShow)
  }

  const handleClickOption = (id: string): void => {
    const optionSelectedById = options.find(option => option.id === id)
    if (optionSelectedById) {
      setOptionSelected(optionSelectedById)
      setShowDropDown(false)
    }

  }
  return (
    <S.DropDownMenu width={width}>
      <TitleItem title={title} show={!showDropDown}>
        <button className={`btn-open-dropdown ${showDropDown ? "option-selected-active" : ""}`} onClick={handleClickButtonOpenDropDown}>{optionSelected.label}<i className='bx bx-chevron-down' ></i></button>
      </TitleItem>

      {
        showDropDown && (
          <ul className="options-to-select" ref={dropDownRef}>
            {
              options.map(({ label, id }) => (
                <li id={id} className={optionSelected.id === id ? "option-selected-active-list" : ""} key={id} onClick={() => { handleClickOption(id); }}>{label}</li>
              ))
            }
          </ul>
        )
      }
    </S.DropDownMenu>
  )
}

export default DropDownMenu