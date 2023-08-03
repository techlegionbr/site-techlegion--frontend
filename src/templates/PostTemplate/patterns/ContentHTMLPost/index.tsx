
import { type IPostPublic } from "@/types/IPost"
import abbreviateName from "@/utils/abbreviateName"
import formatDate from "@/utils/formatDate"

import * as S from "./styles"

interface IContentHTMLPostProps {
  post: Pick<IPostPublic, "createdAt" | "head" | "content" | "profileEditor">
}

const ContentHTMLPost = ({ post: { content, createdAt, head: { title }, profileEditor } }: IContentHTMLPostProps): JSX.Element => {
  return (
    <S.ContentHTMLPost>
      <div className="header-post">
        <h1>{title}</h1>
        <span className="createdAt">Publicado em <b>{formatDate(createdAt, "long")}</b> por <span className="name">{abbreviateName(profileEditor.name)}</span>.</span>
      </div>
      <div className="content-post" dangerouslySetInnerHTML={{ __html: content.html }} />
    </S.ContentHTMLPost>
  )
}


export default ContentHTMLPost