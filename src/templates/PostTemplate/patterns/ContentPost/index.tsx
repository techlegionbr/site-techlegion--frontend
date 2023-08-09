
import TextEditor from "@/patterns/TextEditor"
import { type IPostPublic } from "@/types/IPost"
import abbreviateName from "@/utils/abbreviateName"
import formatDate from "@/utils/formatDate"

import * as S from "./styles"

interface IContentPostProps {
  post: Pick<IPostPublic, "createdAt" | "head" | "content" | "profileEditor">
}

const ContentPost = ({ post: { content, createdAt, head: { title }, profileEditor } }: IContentPostProps): JSX.Element => {
  return (
    <S.ContentPost>
      <div className="header-post">
        <h1>{title}</h1>
        <span className="createdAt">Publicado em <b>{formatDate(createdAt, "long")}</b> por <span className="name">{abbreviateName(profileEditor.name)}</span>.</span>
      </div>
      <TextEditor
        contentRawString={content.rawString}
        modePost
      />
    </S.ContentPost>
  )
}


export default ContentPost