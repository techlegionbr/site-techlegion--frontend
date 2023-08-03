

import { type IDropDownOption } from "../DropDownMenu/types"
import { type THeadingType } from "./types"
import transpileOptionsWithId from "./utils"


interface IOptionsMenu {
  heading: Array<IDropDownOption<THeadingType>>
}


export const optionsMenu: IOptionsMenu = {
  heading: transpileOptionsWithId<THeadingType>([
    {
      label: <span className="pejurative-size-of-p-toolbar-text-editor">Paragraph</span>,
      value: "paragraph"
    },
    {
      label: <span className="pejurative-size-of-h1-toolbar-text-editor">Heading 1</span>,
      value: "heading-1"
    },
    {
      label: <span className="pejurative-size-of-h2-toolbar-text-editor">Heading 2</span>,
      value: "heading-2"
    },
    {
      label: <span className="pejurative-size-of-h3-toolbar-text-editor">Heading 3</span>,
      value: "heading-3"
    },
  ])
}