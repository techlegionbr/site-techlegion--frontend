import { useState } from "react"
import ContentEditable, { type ContentEditableEvent } from 'react-contenteditable';

import * as S from "./styles"

const FieldEditable = (): JSX.Element => {
  const [content, setContent] = useState('');

  const handleContentChange = (event: ContentEditableEvent): void => {
    setContent(event.target.value);
  };

  return (
    <S.FieldEditable>
      <ContentEditable
        className="editable-field"
        html={content}
        onChange={handleContentChange}
        tagName="div"
      />
    </S.FieldEditable>
  )
}

export default FieldEditable