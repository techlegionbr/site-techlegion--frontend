
import React, { createContext, useState, type ReactNode, useEffect } from "react";

import { type Flatten } from "@/types/utilitsTypes";

import { type IStatusControllers, type ITextEditorContext } from "./types";

interface ITextEditorProvider {
  children: ReactNode
}

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export const TextEditorContext = createContext<ITextEditorContext>({} as ITextEditorContext)


const TextEditorProvider = ({ children }: ITextEditorProvider): JSX.Element => {
  const [statusControllers, setStatusControllers] = useState<IStatusControllers>({
    heading: "paragraph",
    bold: false,
    italic: false,
    list_ul: false,
    list_ol: false,
    list_td: false,
    align_start: false,
    align_center: false,
    align_end: false,
    align_justify: false,
    blockQuote: false,
  })

  useEffect(() => {
    console.log(statusControllers)
  }, [statusControllers])

  const handleStatesControllers = (controller: keyof IStatusControllers, value: Flatten<IStatusControllers>): void => {
    const singleMarkedGroup = (groups: Array<Array<keyof IStatusControllers>>): void => {
      const groupSelected = groups.find(group => group.includes(controller)) ?? []
      setStatusControllers(prevStatus => ({
        ...prevStatus,
        ...(groupSelected.includes(controller) && Object.fromEntries(groupSelected.map(field => [field, false]))),
        [controller]: value
      }))
    }

    singleMarkedGroup([
      ["align_center", "align_end", "align_justify", "align_start"],
      ["list_ol", "list_td", "list_ul"]
    ])
  }

  return (
    <TextEditorContext.Provider value={{
      statusControllers,
      handleStatesControllers
    }}>
      {children}
    </TextEditorContext.Provider>
  )
}

export default TextEditorProvider
