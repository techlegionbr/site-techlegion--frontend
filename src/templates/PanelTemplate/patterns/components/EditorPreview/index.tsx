
import { forwardRef } from "react"

import normalizeString from "@/utils/normalizeString"
import removeChar from "@/utils/removeChar"

import Image from "next/image"
import Link from "next/link"

import * as S from "./styles"
import { type IEditorPreviewProps } from "./types"



const EditorPreview = forwardRef<HTMLLIElement, IEditorPreviewProps>(({ editor: { email, name, profile, whatsapp }, ...restProps }, ref): JSX.Element => {
  return (
    <S.EditorPreview {...restProps} ref={ref}>
      <span className="stamp"><i className='bx bxs-pen'></i></span>
      <div className="profile">
        <Image src={profile} alt={name} width={50} height={50} />
      </div>
      <div className="infos-personal">
        <span className="name">{name}</span>
        <span className="email">{email}</span>
        <Link className="whatsapp" href={`https://api.whatsapp.com/send?phone=${removeChar(normalizeString(whatsapp), " ", true)}`}><i className='bx bxl-whatsapp'></i>{whatsapp}</Link>
      </div>
    </S.EditorPreview>
  )
})

EditorPreview.displayName = "EditorPreview"

export default EditorPreview