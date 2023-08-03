/* eslint-disable react-hooks/exhaustive-deps */

import { useContext } from "react"

import { TextEditorContext } from "../../contexts/TextEditorContext"
import ButtonBox from "./ButtonBox"
import DropDownMenu from "./DropDownMenu"
import InputImageBox from "./InputImageBox"
import MarkBox from "./MarkBox"
import { optionsMenu } from "./options"
import { type THeadingType } from "./options/types"
import * as S from "./styles"


const ToolBar = (): JSX.Element => {
  const { statusControllers, handleStatesControllers } = useContext(TextEditorContext)



  return (
    <S.ToolBar>
      <DropDownMenu
        options={optionsMenu.heading}
        width={150}
        onChange={value => { handleStatesControllers("heading", value as THeadingType); }}
        title="Heading"
        value={statusControllers.heading}
      />
      <div className="divider-line" />
      <MarkBox
        title="Bold"
        icon={<i className='bx bx-bold' ></i>}
        onChange={status => { handleStatesControllers("bold", status); }}
        marked={statusControllers.bold}
      />
      <MarkBox
        title="Italic"
        icon={<i className='bx bx-italic' ></i>}
        onChange={status => { handleStatesControllers("italic", status); }}
        marked={statusControllers.italic}
      />
      <div className="divider-line" />
      <MarkBox
        title="Lista não ordenada"
        icon={<i className='bx bx-list-ul' ></i>}
        onChange={status => { handleStatesControllers("list_ul", status); }}
        marked={statusControllers.list_ul}
      />
      <MarkBox
        title="Lista ordenada"
        icon={<i className='bx bx-list-ol'></i>}
        onChange={status => { handleStatesControllers("list_ol", status); }}
        marked={statusControllers.list_ol}
      />
      <MarkBox
        title="To-do-list"
        icon={<i className='bx bx-list-check' ></i>}
        onChange={status => { handleStatesControllers("list_td", status); }}
        marked={statusControllers.list_td}
      />
      <div className="divider-line" />
      <MarkBox
        title="Inicial"
        icon={<i className='bx bx-align-left' ></i>}
        onChange={status => { handleStatesControllers("align_start", status); }}
        marked={statusControllers.align_start}
      />
      <MarkBox
        title="Central"
        icon={<i className='bx bx-align-middle' ></i>}
        onChange={status => { handleStatesControllers("align_center", status); }}
        marked={statusControllers.align_center}
      />
      <MarkBox
        title="Final"
        icon={<i className='bx bx-align-right' ></i>}
        onChange={status => { handleStatesControllers("align_end", status); }}
        marked={statusControllers.align_end}
      />
      <MarkBox
        title="Justificado"
        icon={<i className='bx bx-align-justify' ></i>}
        onChange={status => { handleStatesControllers("align_justify", status); }}
        marked={statusControllers.align_justify}
      />
      <div className="divider-line" />
      <MarkBox
        title="Bloco de citação"
        icon={<i className='bx bxs-quote-left' ></i>}
        onChange={status => { handleStatesControllers("blockQuote", status); }}
        marked={statusControllers.blockQuote}
      />
      <ButtonBox title="Link" icon={<i className='bx bx-link' ></i>} />
      <InputImageBox title="Imagem" />
      <div className="divider-line" />
      <ButtonBox title="Avançar" icon={<i className='bx bxs-left-arrow-alt'></i>} />
      <ButtonBox title="Retroceder" icon={<i className='bx bxs-right-arrow-alt'></i>} />
    </S.ToolBar>
  )
}

export default ToolBar